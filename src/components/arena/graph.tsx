import React, { useCallback, useRef } from "react";
import { ForceGraph3D } from "react-force-graph";
import { SizeMeProps, withSize } from "react-sizeme";
import {
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  Texture,
  TextureLoader,
} from "three";

interface ExampleGraphProps extends SizeMeProps {
  data: { nodes: any[]; links: any[] };
}
const ArenaForceGraph: React.FC<ExampleGraphProps> = ({ size, data }) => {
  const containerRef = useRef<any>();

  const handleClick = useCallback(
    (node: { x: number; y: number; z: number }) => {
      const distance = 100;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      if (containerRef.current) {
        containerRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          },
          node,
          3000
        );
      }
    },
    [containerRef]
  );

  return (
    <>
      <ForceGraph3D
        // REFERENCE
        ref={containerRef}
        // DATA
        graphData={data}
        // STYLING
        linkColor={() => "rgba(0,0,0,1)"}
        backgroundColor={"rgba(0,0,0,0)"}
        // EVENTS
        onNodeClick={handleClick}
        // SIZING
        width={size.width ?? 0}
        height={size.height ?? 0}
        // CUSTOM OBJECTS
        nodeThreeObject={({ image }) => {
          if (image) {
            const mesh = new Mesh();
            const sprite = new Sprite();
            const texture = new TextureLoader().load(image, (tex: Texture) => {
              tex.needsUpdate = true;
              sprite.scale.set(
                tex.image.width / 100,
                tex.image.height / 100,
                1
              );
            });
            sprite.material = new SpriteMaterial({
              map: texture,
              transparent: true,
            });
            mesh.add(sprite);
            return mesh;
          } else {
            const sphere = new Mesh(
              new SphereGeometry(1),
              new MeshBasicMaterial({ color: 0x000000 })
            );
            return sphere;
          }
        }}
      />
    </>
  );
};

const ArenaForceGraphWithSize = withSize({
  monitorWidth: true,
  monitorHeight: true,
})(ArenaForceGraph);

export default ArenaForceGraphWithSize;
