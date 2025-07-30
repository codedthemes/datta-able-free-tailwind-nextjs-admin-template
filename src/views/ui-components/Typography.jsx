// ==============================|| TYPOGRAPHY PAGE ||============================== //

export default function TypographyPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="card">
          <div className="card-header">
            <h5>Headings</h5>
          </div>
          <div className="card-body pc-component">
            <h1>h1. Heading</h1>
            <div className="clearfix"></div>
            <h2>h2. Heading</h2>
            <div className="clearfix"></div>
            <h3>This is a H3</h3>
            <div className="clearfix"></div>
            <h4>This is a H4</h4>
            <div className="clearfix"></div>
            <h5>This is a H5</h5>
            <div className="clearfix"></div>
            <h6>This is a H6</h6>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="card">
          <div className="card-header">
            <h5>Inline Text Elements</h5>
          </div>
          <div className="card-body pc-component">
            <p className="lead m-t-0">Your title goes here</p>
            You can use the mark tag to
            <mark>highlight</mark>
            text.
            <br />
            <del>This line of text is meant to be treated as deleted text.</del>
            <br />
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
            <br />
            <strong>rendered as bold text</strong>
            <br />
            <em>rendered as italicized text</em>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="card">
          <div className="card-header">
            <h5>Contextual Text Colors</h5>
          </div>
          <div className="card-body pc-component">
            <p className="text-muted mb-1">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
            <p className="text-primary-500 mb-1">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p className="text-success-500 mb-1">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <p className="text-info-500 mb-1">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            <p className="text-warning-500 mb-1">Etiam porta sem malesuada magna mollis euismod.</p>
            <p className="text-danger-500 mb-1">Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p className="text-dark-500 mb-1 dark:text-white">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="card">
          <div className="card-header">
            <h5>Unordered</h5>
          </div>
          <div className="card-body pc-component">
            <ul className="list-disc ltr:pl-4 rtl:pr-4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul className="list-[circle] ltr:pl-4 rtl:pr-4">
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="card">
          <div className="card-header">
            <h5>Ordered</h5>
          </div>
          <div className="card-body pc-component">
            <ol className="list-decimal ltr:pl-4 rtl:pr-4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul className="list-[circle] ltr:pl-4 rtl:pr-4">
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="card">
          <div className="card-header">
            <h5>Unstyled</h5>
          </div>
          <div className="card-body pc-component">
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Integer molestie lorem at massa
                <ul className="list-[circle] pl-4">
                  <li>Phasellus iaculis neque</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Eget porttitor lorem</li>
            </ul>
            <h5 className="mt-3">Inline</h5>
            <hr className="border-theme-border dark:border-themedark-border my-4 border-0 border-t" />
            <ul>
              <li className="mr-2 inline-block">Lorem ipsum</li>
              <li className="mr-2 inline-block">Phasellus iaculis</li>
              <li className="mr-2 inline-block">Nulla volutpat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="card">
          <div className="card-header">
            <h5>Blockquotes</h5>
          </div>
          <div className="card-body pc-component">
            <p className="text-muted mb-1">Your awesome text goes here.</p>
            <blockquote className="px-4 py-2 text-[1rem]">
              <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="text-theme-bodycolor/70 dark:text-themedark-bodycolor/70 text-[80%] before:content-['—']">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
            <p className="text-muted m-b-15 m-t-20">
              Add
              <code className="text-danger-400 text-sm">.text-right</code>
              for a blockquote with right-aligned content.
            </p>
            <blockquote className="px-4 py-2 text-right text-[1rem]">
              <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="text-theme-bodycolor/70 dark:text-themedark-bodycolor/70 text-[80%] before:content-['—']">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="card">
          <div className="card-header">
            <h5>Horizontal Description</h5>
          </div>
          <div className="card-body pc-component">
            <dl className="grid grid-cols-12 gap-6">
              <dt className="col-span-12 font-semibold sm:col-span-3">Description lists</dt>
              <dd className="col-span-12 sm:col-span-9">A description list is perfect for defining terms.</dd>
              <dt className="col-span-12 font-semibold sm:col-span-3">Euismod</dt>
              <dd className="col-span-12 sm:col-span-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
              <dd className="col-span-12 sm:col-span-9">Donec id elit non mi porta gravida at eget metus.</dd>
              <dt className="col-span-12 font-semibold sm:col-span-3">Malesuada porta</dt>
              <dd className="col-span-12 sm:col-span-9">Etiam porta sem malesuada magna mollis euismod.</dd>
              <dt className="col-span-12 font-semibold sm:col-span-3">Truncated term is truncated</dt>
              <dd className="col-span-12 sm:col-span-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
