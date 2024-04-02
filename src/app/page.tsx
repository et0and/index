export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-6 grid-rows-6 gap-6 w-[1440px]">
        <div className="col-span-6" />
        <div className="col-span-2" />
        <section className="col-span-2">
          <div className="flex flex-col gap-1">
            <span>Raphael Salaja</span>
            <span className="opacity-50 text-justify">
              genreless creator / (ˈʒɑːnrəlɪs krɪˈeɪtər) / noun
            </span>
            <span className="opacity-50 text-justify">
              an individual who defies traditional categorisation within
              creative endeavours, blending diverse influences and mediums to
              produce innovative works.
            </span>
          </div>
        </section>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <section className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="opacity-50">
              <span>Work</span>
            </div>
            <div className=" flex flex-col gap-3">
              <span>Experiments</span>
              <span>Projects</span>
              <span>Pursuits</span>
              <span>Journey</span>
            </div>
          </div>
        </section>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <section className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="opacity-50">Social</span>
            </div>
            <div className=" flex flex-col gap-3">
              <span>Email</span>
              <span>Twitter</span>
              <span>Youtube</span>
              <span>Github</span>
            </div>
          </div>
        </section>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <section className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="opacity-50">Support</span>
            </div>
            <div className=" flex flex-col gap-3">
              <span>Zora</span>
              <span>Patreon</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
