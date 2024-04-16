"use client";

import Arena from "are.na";

const arena = new Arena();

export function determineType(url: string) {
  if (url.includes("block")) {
    return "block";
  }
  if (url.includes("channel")) {
    return "channel";
  }
  return "unknown";
}

export function getBlockSlug(url: string) {
  const slug = url.split("/").pop();
  return slug ? slug : "";
}

export function createBlockUrl(slug: string) {
  return `https://www.are.na/block/${slug}`;
}

export async function getBlockConnections(url: string) {
  try {
    const blockSlug = getBlockSlug(url);
    const channels = await arena.block(blockSlug).channels();

    let nodes: {
      id: string;
      name: string;
      image?: string;
    }[] = [];

    let links: {
      source: string;
      target: string;
    }[] = [];

    await Promise.all(
      channels.map(async (channel) => {
        const blocks = await getChannelBlocks(channel.slug);

        nodes.push({
          id: String(channel.id),
          name: String(channel.title),
        });

        blocks.forEach(async (block) => {
          if (!block.image) {
            return;
          }
          links.push({
            source: String(channel.id),
            target: String(block.id),
          });
        });

        blocks.forEach(async (block) => {
          if (!block.image) {
            return;
          }

          nodes.push({
            id: String(block.id),
            name: String(block.title),
            image: String(block.image?.display.url),
          });
        });

        channels.forEach((otherChannel) => {
          if (channel.id === otherChannel.id) {
            return;
          }

          blocks.forEach((block) => {
            if (block.image) {
              return;
            }

            const otherBlocks = blocks.filter(
              (b) => b.id !== block.id && b.image
            );

            otherBlocks.forEach((otherBlock) => {
              links.push({
                source: String(channel.id),
                target: String(otherChannel.id),
              });
            });
          });
        });
      })
    );

    return {
      nodes,
      links,
    };
  } catch (error) {
    console.error("Error fetching block connections:", error);
    throw error;
  }
}

export async function getChannelBlocks(name: string) {
  try {
    const channel = await arena.channel(name).contents();
    return channel;
  } catch (error) {
    console.error("Error fetching channel blocks:", error);
    throw error;
  }
}
