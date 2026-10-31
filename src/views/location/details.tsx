export default function Details() {
  return (
    <section aria-labelledby="location-title" className="bg-ink text-white">
      <div className="v-container pt-12 pb-14 md:flex md:items-start md:justify-between md:pt-22 md:pb-20 lg:pt-26 lg:pb-32">
        <h1
          id="location-title"
          className="font-display text-heading-m-tablet uppercase md:w-min md:text-heading-l-tablet lg:text-heading-l"
        >
          Our location
        </h1>
        <div className="mt-12 md:mt-0 md:w-99.5 lg:w-135">
          <address className="not-italic">
            <span className="block font-display text-heading-s-tablet text-accent uppercase lg:text-heading-s">
              99 King Street
            </span>
            <span className="mt-5 block text-body-s lg:mt-6 lg:text-body-m">
              Newport
              <br /> RI 02840
              <br /> United States of America
            </span>
          </address>
          <p className="mt-5 text-body-s lg:mt-8 lg:text-body-m">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </section>
  );
}
