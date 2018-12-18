import React from 'react'
import pic01 from '../images/pic01.jpg'

export default () => {
  return (
    <div id='wrapper' className='divided'>
      <section className='banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right'>
        <div className='content'>
          <h1>Story</h1>
          <p className='major'>
            A commodo, ornare aliquet quisque viverra blandit cubilia in Laoreet
            vel sodales mus eget augue sed Gravida Egestas.
          </p>
          <p>
            This is a <strong>Banner</strong> element, and it's generally used
            as an introduction or opening statement. You can customize its{' '}
            <span className='demo-controls'>
              appearance with a number of modifiers
            </span>, as well as assign it an optional <code>onload</code> or{' '}
            <code>onscroll</code> transition modifier (<a href='#reference-banner'>
              details
            </a>).
          </p>
          <ul className='actions vertical'>
            <li>
              <a href='#first' className='button big wide smooth-scroll-middle'>
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div className='image'>
          <img src={pic01} alt='' />
        </div>
      </section>

      <section
        className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'
        id='first'
      >
        <div className='content'>
          <h2>Spotlight</h2>
          <p>
            This is a <strong>Spotlight</strong> element, and it's generally
            used &ndash; as its name implies &ndash; to spotlight a particular
            feature, subject, or pretty much whatever. You can customize its{' '}
            <span className='demo-controls'>
              appearance with a number of modifiers
            </span>, as well as assign it an optional <code>onload</code> or{' '}
            <code>onscroll</code> transition modifier (<a href='#reference-spotlight'>
              details
            </a>).
          </p>
          <ul className='actions vertical'>
            <li>
              <a href='#' className='button'>
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div className='image'>
          <img src={pic01} alt='' />
        </div>
      </section>

      <section className='spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in'>
        <div className='content'>
          <h2>Spotlight</h2>
          <p>
            This is also a <strong>Spotlight</strong> element, and it's here
            because this demo would look a bit empty with just one spotlight.
            Like all spotlights, you can customize its{' '}
            <span className='demo-controls'>
              appearance with a number of modifiers
            </span>, as well as assign it an optional <code>onload</code> or{' '}
            <code>onscroll</code> transition modifier (<a href='#reference-spotlight'>
              details
            </a>).
          </p>
          <ul className='actions vertical'>
            <li>
              <a href='#' className='button'>
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div className='image'>
          <img src={pic01} alt='' />
        </div>
      </section>

      <section className='spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in'>
        <div className='content'>
          <h2>Spotlight</h2>
          <p>
            And yes, this is another <strong>Spotlight</strong> element, and
            it's also here because I need to fill a bit of space. Naturally,
            like any other spotlight, you can customize its{' '}
            <span className='demo-controls'>
              appearance with a number of modifiers
            </span>, as well as assign it an optional <code>onload</code> or{' '}
            <code>onscroll</code> transition modifier (<a href='#reference-spotlight'>
              details
            </a>).
          </p>
          <ul className='actions vertical'>
            <li>
              <a href='#' className='button'>
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div className='image'>
          <img src={pic01} alt='' />
        </div>
      </section>

      <section className='wrapper style1 align-center'>
        <div className='inner'>
          <h2>Gallery</h2>
          <p>
            This is a <strong>Gallery</strong> element. It can behave as a
            lightbox (when given the <code>lightbox</code> class), and you can
            customize its{' '}
            <span className='demo-controls'>
              appearance with a number of modifiers
            </span>, as well as assign it an optional <code>onload</code> or{' '}
            <code>onscroll</code> transition modifier (<a href='#reference-gallery'>
              details
            </a>).
          </p>
        </div>

        <div className='gallery style2 medium lightbox onscroll-fade-in'>
          <article>
            <a href='images/gallery/fulls/01.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/02.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/03.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/04.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/05.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/06.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/07.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/08.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/09.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/10.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/11.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
          <article>
            <a href='images/gallery/fulls/12.jpg' className='image'>
              <img src={pic01} alt='' />
            </a>
            <div className='caption'>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed
                ultrices.
              </p>
              <ul className='actions'>
                <li>
                  <span className='button small'>Details</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className='wrapper style1 align-center'>
        <div className='inner'>
          <h2>Items</h2>
          <p>
            This is an <strong>Items</strong> element, and it's basically just a
            grid for organizing items of various types. You can customize its{' '}
            <span className='demo-controls'>
              appearance with a number of modifiers
            </span>, as well as assign it an optional <code>onload</code> or{' '}
            <code>onscroll</code> transition modifier (<a href='#reference-items'>
              details
            </a>).
          </p>
          <div className='items style1 medium onscroll-fade-in'>
            <section>
              <span className='icon style2 major fa-diamond' />
              <h3>One</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-save' />
              <h3>Two</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-bar-chart' />
              <h3>Three</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-wifi' />
              <h3>Four</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-cog' />
              <h3>Five</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-paper-plane' />
              <h3>Six</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-desktop' />
              <h3>Seven</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-refresh' />
              <h3>Eight</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-hashtag' />
              <h3>Nine</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-bolt' />
              <h3>Ten</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-envelope' />
              <h3>Eleven</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
            <section>
              <span className='icon style2 major fa-leaf' />
              <h3>Twelve</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis, cursus eget orci amet aliquam congue semper. Etiam
                eget ultrices risus nec tempor elit.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className='wrapper style1 align-center'>
        <div className='inner'>
          <h2>Additional Elements</h2>
          <p>
            Finally, here are some additional elements you <em>might</em> find
            useful (and yup, they look fine with any{' '}
            <span className='demo-controls'>appearance</span>).
          </p>
          <div className='index align-left'>
            <section>
              <header>
                <h3>Text</h3>
              </header>
              <div className='content'>
                <p>
                  This is <b>bold</b> and this is <strong>strong</strong>. This
                  is <i>italic</i> and this is <em>emphasized</em>. This is{' '}
                  <sup>superscript</sup> text and this is <sub>subscript</sub>{' '}
                  text. This is <u>underlined</u> and this is code:{' '}
                  <code>console.log('Hello, world!')</code>. Finally, this is a{' '}
                  <a href='#'>link</a>.
                </p>
              </div>
            </section>

            <section>
              <header>
                <h3>Headings</h3>
              </header>
              <div className='content'>
                <h1>Heading Level 1</h1>
                <h2>Heading Level 2</h2>
                <h3>Heading Level 3</h3>
                <h4>Heading Level 4</h4>
                <h5>Heading Level 5</h5>
                <h6>Heading Level 6</h6>

                <hr />

                <header>
                  <h1>Heading with a Subtitle</h1>
                  <p>
                    Lorem ipsum dolor sit amet nullam id egestas urna aliquam
                  </p>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis. Interdum adipiscing
                  gravida odio porttitor sem non mi integer non faucibus ornare
                  mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia
                  sapien lorem accumsan varius montes viverra nibh in adipiscing
                  blandit tempus accumsan.
                </p>

                <hr />

                <header>
                  <h2>Heading with a Subtitle</h2>
                  <p>
                    Lorem ipsum dolor sit amet nullam id egestas urna aliquam
                  </p>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis. Interdum adipiscing
                  gravida odio porttitor sem non mi integer non faucibus ornare
                  mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia
                  sapien lorem accumsan varius montes viverra nibh in adipiscing
                  blandit tempus accumsan.
                </p>

                <hr />

                <header>
                  <h3>Heading with a Subtitle</h3>
                  <p>
                    Lorem ipsum dolor sit amet nullam id egestas urna aliquam
                  </p>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis. Interdum adipiscing
                  gravida odio porttitor sem non mi integer non faucibus ornare
                  mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia
                  sapien lorem accumsan varius montes viverra nibh in adipiscing
                  blandit tempus accumsan.
                </p>
              </div>
            </section>

            <section>
              <header>
                <h3>Unordered List</h3>
              </header>
              <div className='content'>
                <h4>Default</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Interdum adipiscing gravida odio</li>
                  <li>Porttitor sem non integer</li>
                  <li>Non faucibus ornare mi ut ante</li>
                  <li>Sagittis adipiscing eleifend</li>
                  <li>Felis amet dolore viverra</li>
                </ul>

                <h4>Alternate</h4>
                <ul className='alt'>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Interdum adipiscing gravida odio</li>
                  <li>Porttitor sem non integer</li>
                  <li>Non faucibus ornare mi ut ante</li>
                  <li>Sagittis adipiscing eleifend</li>
                  <li>Felis amet dolore viverra</li>
                </ul>
              </div>
            </section>

            <section>
              <header>
                <h3>Ordered List</h3>
              </header>
              <div className='content'>
                <ol>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Interdum adipiscing gravida odio</li>
                  <li>Porttitor sem non integer</li>
                  <li>Non faucibus ornare mi ut ante</li>
                  <li>Sagittis adipiscing eleifend</li>
                  <li>Felis amet dolore viverra</li>
                </ol>
              </div>
            </section>

            <section>
              <header>
                <h3>Definition List</h3>
              </header>
              <div className='content'>
                <dl>
                  <dt>Interdum adipiscing odio</dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                      vestibulum. Blandit adipiscing eu felis iaculis volutpat
                      ac adipiscing accumsan eu faucibus. Integer ac
                      pellentesque praesent fringilla quis tincidunt felis
                      sagittis eget tempus euismod. Ante ipsum primis
                      vestibulum.
                    </p>
                  </dd>
                  <dt>Non faucibus ornare mi ut ante</dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                      vestibulum. Blandit adipiscing eu felis iaculis volutpat
                      ac adipiscing accumsan eu faucibus. Integer ac
                      pellentesque praesent fringilla quis tincidunt felis
                      sagittis eget tempus euismod. Ante ipsum primis
                      vestibulum.
                    </p>
                  </dd>
                  <dt>Felis amet dolore viverra</dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                      vestibulum. Blandit adipiscing eu felis iaculis volutpat
                      ac adipiscing accumsan eu faucibus. Integer ac
                      pellentesque praesent fringilla quis tincidunt felis
                      sagittis eget tempus euismod. Ante ipsum primis
                      vestibulum.
                    </p>
                  </dd>
                </dl>
              </div>
            </section>

            <section>
              <header>
                <h3>Blockquote</h3>
              </header>
              <div className='content'>
                <blockquote>
                  Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                  vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                  adipiscing accumsan eu faucibus. Integer ac pellentesque
                  praesent fringilla quis tincidunt felis sagittis eget tempus
                  euismod. Ante ipsum primis vestibulum.
                </blockquote>
              </div>
            </section>

            <section>
              <header>
                <h3>Code</h3>
              </header>
              <div className='content'>
                <pre>
                  <code>
                    i = 0; while (!deck.isInOrder()) {'{'}
                    print 'Iteration ' + i; deck.shuffle(); i++;
                    {'}'}
                    print 'It took ' + i + ' iterations to sort the deck.';
                  </code>
                </pre>
              </div>
            </section>

            <section>
              <header>
                <h3>Icons</h3>
              </header>
              <div className='content'>
                <h4>Style #1</h4>
                <ul className='icons'>
                  <li>
                    <a href='#' className='icon style1 fa-twitter'>
                      <span className='label'>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style1 fa-facebook'>
                      <span className='label'>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style1 fa-instagram'>
                      <span className='label'>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style1 fa-github'>
                      <span className='label'>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style1 fa-dribbble'>
                      <span className='label'>Dribbble</span>
                    </a>
                  </li>
                </ul>

                <h4>Style #2</h4>
                <ul className='icons'>
                  <li>
                    <a href='#' className='icon style2 fa-twitter'>
                      <span className='label'>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style2 fa-facebook'>
                      <span className='label'>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style2 fa-instagram'>
                      <span className='label'>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style2 fa-github'>
                      <span className='label'>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='icon style2 fa-dribbble'>
                      <span className='label'>Dribbble</span>
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <header>
                <h3>Buttons</h3>
              </header>
              <div className='content'>
                <ul className='actions'>
                  <li>
                    <a href='#' className='button special'>
                      Special
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button'>
                      Default
                    </a>
                  </li>
                </ul>
                <ul className='actions'>
                  <li>
                    <a href='#' className='button special big'>
                      Big
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button'>
                      Default
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button small'>
                      Small
                    </a>
                  </li>
                </ul>
                <ul className='actions fit'>
                  <li>
                    <a href='#' className='button special fit'>
                      Fit
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button fit'>
                      Fit
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button special fit'>
                      Fit
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button fit'>
                      Fit
                    </a>
                  </li>
                </ul>
                <ul className='actions fit small'>
                  <li>
                    <a href='#' className='button special fit small'>
                      Fit + Small
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button fit small'>
                      Fit + Small
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button special fit small'>
                      Fit + Small
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button fit small'>
                      Fit + Small
                    </a>
                  </li>
                </ul>
                <ul className='actions'>
                  <li>
                    <a href='#' className='button special icon fa-search'>
                      Icon
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button icon fa-download'>
                      Icon
                    </a>
                  </li>
                </ul>
                <ul className='actions'>
                  <li>
                    <span className='button special disabled'>Special</span>
                  </li>
                  <li>
                    <span className='button disabled'>Default</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <header>
                <h3>Actions</h3>
              </header>
              <div className='content'>
                <h4>Default</h4>
                <ul className='actions'>
                  <li>
                    <a href='#' className='button special'>
                      Default
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button'>
                      Default
                    </a>
                  </li>
                </ul>

                <h4>Small</h4>
                <ul className='actions small'>
                  <li>
                    <a href='#' className='button special small'>
                      Small
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button small'>
                      Small
                    </a>
                  </li>
                </ul>

                <h4>Vertical</h4>
                <ul className='actions vertical'>
                  <li>
                    <a href='#' className='button special'>
                      Default
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button'>
                      Default
                    </a>
                  </li>
                </ul>

                <h4>Vertical + Small</h4>
                <ul className='actions vertical small'>
                  <li>
                    <a href='#' className='button special small'>
                      Small
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button small'>
                      Small
                    </a>
                  </li>
                </ul>

                <h4>Vertical + Fit</h4>
                <ul className='actions vertical'>
                  <li>
                    <a href='#' className='button special fit'>
                      Default
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button fit'>
                      Default
                    </a>
                  </li>
                </ul>

                <h4>Vertical + Small + Fit</h4>
                <ul className='actions vertical small'>
                  <li>
                    <a href='#' className='button special small fit'>
                      Small
                    </a>
                  </li>
                  <li>
                    <a href='#' className='button small fit'>
                      Small
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <header>
                <h3>Form</h3>
              </header>
              <div className='content'>
                <form method='post' action='#'>
                  <div className='field half first'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' value='' />
                  </div>
                  <div className='field half'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' value='' />
                  </div>
                  <div className='field'>
                    <label htmlFor='department'>Department</label>
                    <div className='select-wrapper'>
                      <select name='department' id='department'>
                        <option value=''>- Category -</option>
                        <option value='1'>Manufacturing</option>
                        <option value='2'>Shipping</option>
                        <option value='3'>Administration</option>
                        <option value='4'>Human Resources</option>
                      </select>
                    </div>
                  </div>
                  <div className='field third first'>
                    <input
                      type='radio'
                      id='priority-low'
                      name='priority'
                      checked
                      readOnly
                    />
                    <label htmlFor='priority-low'>Low Priority</label>
                  </div>
                  <div className='field third'>
                    <input type='radio' id='priority-normal' name='priority' />
                    <label htmlFor='priority-normal'>Normal Priority</label>
                  </div>
                  <div className='field third'>
                    <input type='radio' id='priority-high' name='priority' />
                    <label htmlFor='priority-high'>High Priority</label>
                  </div>
                  <div className='field'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='message' rows='6' />
                  </div>
                  <div className='field half first'>
                    <input type='checkbox' id='copy' name='copy' />
                    <label htmlFor='copy'>
                      Email me a copy of this message
                    </label>
                  </div>
                  <div className='field half'>
                    <input
                      type='checkbox'
                      id='human'
                      name='human'
                      checked
                      readOnly
                    />
                    <label htmlFor='human'>I am a human and not a robot</label>
                  </div>
                  <ul className='actions'>
                    <li>
                      <input
                        type='submit'
                        name='submit'
                        id='submit'
                        value='Send Message'
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </section>

            <section>
              <header>
                <h3>Table</h3>
              </header>
              <div className='content'>
                <h4>Default</h4>
                <div className='table-wrapper'>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item 1</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item 2</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item 3</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item 4</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item 5</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan='2' />
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <h4>Alternate</h4>
                <div className='table-wrapper'>
                  <table className='alt'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item 1</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item 2</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item 3</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item 4</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item 5</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan='2' />
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <header>
                <h3>Images</h3>
              </header>
              <div className='content'>
                <h4>Fit</h4>
                <span className='image fit'>
                  <img src={pic01} alt='' />
                </span>

                <h4>Left</h4>
                <p>
                  <span className='image left'>
                    <img src={pic01} alt='' />
                  </span>Lorem ipsum dolor sit accumsan interdum nisi, quis
                  tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
                  ipsum primis in faucibus vestibulum. Blandit adipiscing eu
                  felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                  Integer ac pellentesque praesent tincidunt felis sagittis
                  eget. tempus euismod. Vestibulum ante ipsum primis sagittis
                  eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
                  vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                  adipiscing accumsan eu faucibus. Integer ac pellentesque
                  praesent tincidunt felis sagittis eget. tempus euismod.
                  Vestibulum ante ipsum primis in faucibus vestibulum. Blandit
                  adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
                  faucibus. Integer ac pellentesque praesent. Vestibulum ante
                  ipsum primis in faucibus magna blandit adipiscing eu felis
                  iaculis volutpat lorem ipsum dolor sit amet dolor consequat.
                </p>

                <h4>Right</h4>
                <p>
                  <span className='image right'>
                    <img src={pic01} alt='' />
                  </span>Lorem ipsum dolor sit accumsan interdum nisi, quis
                  tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
                  ipsum primis in faucibus vestibulum. Blandit adipiscing eu
                  felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                  Integer ac pellentesque praesent tincidunt felis sagittis
                  eget. tempus euismod. Vestibulum ante ipsum primis sagittis
                  eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
                  vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                  adipiscing accumsan eu faucibus. Integer ac pellentesque
                  praesent tincidunt felis sagittis eget. tempus euismod.
                  Vestibulum ante ipsum primis in faucibus vestibulum. Blandit
                  adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
                  faucibus. Integer ac pellentesque praesent. Vestibulum ante
                  ipsum primis in faucibus magna blandit adipiscing eu felis
                  iaculis volutpat lorem ipsum dolor sit amet dolor consequat.
                </p>
              </div>
            </section>

            <section>
              <header>
                <h3>Box</h3>
              </header>
              <div className='content'>
                <div className='box'>
                  <p>
                    Felis sagittis eget tempus primis in faucibus vestibulum.
                    Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                    accumsan eu faucibus. Integer ac pellentesque praesent
                    tincidunt felis sagittis eget. tempus euismod. Magna sed
                    etiam ante ipsum primis in faucibus vestibulum. Blandit
                    adipiscing eu ipsum primis in faucibus vestibulum. Blandit
                    adipiscing eu felis iaculis volutpat ac adipiscing accumsan
                    eu faucibus lorem ipsum dolor sit amet nullam.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className='wrapper style1 align-center' id='reference'>
        <div className='inner'>
          <h2>Elements Reference</h2>
          <p>
            Oh, and this: a handy reference to all the modifiers supported by
            various elements.
          </p>
          <div className='index align-left'>
            <section id='reference-banner'>
              <header>
                <h3>Banner</h3>
              </header>
              <div className='content'>
                <h4>HTML</h4>
                <pre>
                  <code>
                    &lt;section class="banner style<em>(N)</em>{' '}
                    <em>(optional modifiers)</em>"&gt; &lt;div
                    class="content"&gt;
                    <em>(content)</em>
                    &lt;/div&gt; &lt;div class="image"&gt; &lt;img src="<em>
                      (image URL)
                    </em>" alt="Alternate text" /&gt; &lt;/div&gt;
                    &lt;/section&gt;
                  </code>
                </pre>

                <hr />

                <section>
                  <h4>
                    <code>banner style1</code>
                  </h4>
                  <p>
                    A 50/50 vertical split between content and an image.
                    Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>fullscreen</code>
                          </td>
                          <td>Fills the height of the screen.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Shows content on the left, image on the right.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Shows content on the right, image on the left.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>banner style2</code>
                  </h4>
                  <p>
                    Boxed-in content set against an image background, and
                    attached to either side of the screen or centered. Supports
                    these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>fullscreen</code>
                          </td>
                          <td>Fills the height of the screen.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Attaches the content box to the left edge of the
                            screen.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-center</code>
                          </td>
                          <td>
                            Places the content box in the center of the screen.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Attaches the content box to the right edge of the
                            screen.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>banner style3</code>
                  </h4>
                  <p>
                    An image within a circular frame placed to the side of
                    content. Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>fullscreen</code>
                          </td>
                          <td>Fills the height of the screen.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Places the content on the left, image on the right.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Places the content on the right, image on the left.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-up</code>
                          </td>
                          <td>Fades image up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-down</code>
                          </td>
                          <td>Fades image down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-left</code>
                          </td>
                          <td>Fades image left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-right</code>
                          </td>
                          <td>Fades image right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-up</code>
                          </td>
                          <td>Fades image up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-down</code>
                          </td>
                          <td>Fades image down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-left</code>
                          </td>
                          <td>Fades image left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-right</code>
                          </td>
                          <td>Fades image right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>banner style4</code>
                  </h4>
                  <p>
                    An image within a phone-shaped frame placed to the side of
                    content. Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>fullscreen</code>
                          </td>
                          <td>Fills the height of the screen.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>iphone</code>
                          </td>
                          <td>Uses iPhone styling for image frame.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>android</code>
                          </td>
                          <td>Uses Android styling for image frame.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Places the content on the left, image on the right.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Places the content on the right, image on the left.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-up</code>
                          </td>
                          <td>Fades image up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-down</code>
                          </td>
                          <td>Fades image down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-left</code>
                          </td>
                          <td>Fades image left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-right</code>
                          </td>
                          <td>Fades image right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-up</code>
                          </td>
                          <td>Fades image up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-down</code>
                          </td>
                          <td>Fades image down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-left</code>
                          </td>
                          <td>Fades image left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-right</code>
                          </td>
                          <td>Fades image right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>banner style5</code>
                  </h4>
                  <p>
                    Content set directly against an image background. Supports
                    these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>fullscreen</code>
                          </td>
                          <td>Fills the height of the screen.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </section>

            <section id='reference-spotlight'>
              <header>
                <h3>Spotlight</h3>
              </header>
              <div className='content'>
                <h4>HTML</h4>
                <pre>
                  <code>
                    &lt;section class="spotlight style<em>(N)</em>{' '}
                    <em>(optional modifiers)</em>"&gt; &lt;div
                    class="content"&gt;
                    <em>(content)</em>
                    &lt;/div&gt; &lt;div class="image"&gt; &lt;img src="<em>
                      (image URL)
                    </em>" alt="Alternate text" /&gt; &lt;/div&gt;
                    &lt;/section&gt;
                  </code>
                </pre>

                <hr />

                <section>
                  <h4>
                    <code>spotlight style1</code>
                  </h4>
                  <p>
                    A 30/70 (or 70/30, depending on orientation) vertical split
                    between content and an image. Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Shows content on the left, image on the right.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Shows content on the right, image on the left.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>spotlight style2</code>
                  </h4>
                  <p>
                    An image within a circular frame placed to the side of
                    content. Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Places the content on the left, image on the right.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Places the content on the right, image on the left.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-up</code>
                          </td>
                          <td>Fades image up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-down</code>
                          </td>
                          <td>Fades image down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-left</code>
                          </td>
                          <td>Fades image left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-right</code>
                          </td>
                          <td>Fades image right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-up</code>
                          </td>
                          <td>Fades image up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-down</code>
                          </td>
                          <td>Fades image down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-left</code>
                          </td>
                          <td>Fades image left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-right</code>
                          </td>
                          <td>Fades image right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>spotlight style3</code>
                  </h4>
                  <p>
                    An image within a phone-shaped frame placed to the side of
                    content. Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Places the content on the left, image on the right.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Places the content on the right, image on the left.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-up</code>
                          </td>
                          <td>Fades image up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-down</code>
                          </td>
                          <td>Fades image down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-left</code>
                          </td>
                          <td>Fades image left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-right</code>
                          </td>
                          <td>Fades image right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-up</code>
                          </td>
                          <td>Fades image up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-down</code>
                          </td>
                          <td>Fades image down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-left</code>
                          </td>
                          <td>Fades image left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-right</code>
                          </td>
                          <td>Fades image right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>spotlight style4</code>
                  </h4>
                  <p>
                    Boxed-in content set against an image background, and
                    attached to either side of the screen or centered. Supports
                    these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>fullscreen</code>
                          </td>
                          <td>Fills the height of the screen.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>halfscreen</code>
                          </td>
                          <td>Fills half the height of the screen.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Attaches the content box to the left edge of the
                            screen.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-center</code>
                          </td>
                          <td>
                            Places the content box in the center of the screen.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Attaches the content box to the right edge of the
                            screen.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>spotlight style5</code>
                  </h4>
                  <p>
                    Boxed-in content set against an image background. Supports
                    these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>fullscreen</code>
                          </td>
                          <td>Fills the height of the screen.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>halfscreen</code>
                          </td>
                          <td>Fills half the height of the screen.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>orient-left</code>
                          </td>
                          <td>
                            Places the content box on the left of the screen.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-center</code>
                          </td>
                          <td>
                            Places the content box in the center of the screen.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code>orient-right</code>
                          </td>
                          <td>
                            Places the content box on the right side of the
                            screen.
                          </td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-left</code>
                          </td>
                          <td>Left-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-center</code>
                          </td>
                          <td>Center-aligns content.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>content-align-right</code>
                          </td>
                          <td>Right-aligns content.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-left</code>
                          </td>
                          <td>Left-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-center</code>
                          </td>
                          <td>Center-positions image.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>image-position-right</code>
                          </td>
                          <td>Right-positions image.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-up</code>
                          </td>
                          <td>Fades content up on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-down</code>
                          </td>
                          <td>Fades content down on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-left</code>
                          </td>
                          <td>Fades content left on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-right</code>
                          </td>
                          <td>Fades content right on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-content-fade-in</code>
                          </td>
                          <td>Fades in content on page load.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onload-image-fade-in</code>
                          </td>
                          <td>Fades in image on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-up</code>
                          </td>
                          <td>Fades content up on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-down</code>
                          </td>
                          <td>Fades content down on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-left</code>
                          </td>
                          <td>Fades content left on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-right</code>
                          </td>
                          <td>Fades content right on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-content-fade-in</code>
                          </td>
                          <td>Fades in content on page scroll.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-image-fade-in</code>
                          </td>
                          <td>Fades in image on page scroll.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>invert</code>
                          </td>
                          <td>Inverts the color scheme.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color1</code>
                          </td>
                          <td>Uses background color #1.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color2</code>
                          </td>
                          <td>Uses background color #2.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color3</code>
                          </td>
                          <td>Uses background color #3.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color4</code>
                          </td>
                          <td>Uses background color #4.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color5</code>
                          </td>
                          <td>Uses background color #5.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color6</code>
                          </td>
                          <td>Uses background color #6.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>color7</code>
                          </td>
                          <td>Uses background color #7.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </section>

            <section id='reference-gallery'>
              <header>
                <h3>Gallery</h3>
              </header>
              <div className='content'>
                <h4>HTML</h4>
                <pre>
                  <code>
                    &lt;div class="gallery style<em>(N)</em>{' '}
                    <em>(optional modifiers)</em>"&gt; &lt;article&gt; &lt;a
                    href="<em>(full image URL)</em>" class="image"&gt; &lt;img
                    src="<em>(thumbnail image URL)</em>" alt="Alternate text"
                    /&gt; &lt;/a&gt; &lt;div class="caption"&gt;
                    <em>(caption)</em>
                    &lt;/div&gt; &lt;/article&gt; &lt;article&gt; &lt;a href="<em
                    >
                      (full image URL)
                    </em>" class="image"&gt; &lt;img src="<em>
                      (thumbnail image URL)
                    </em>" alt="Alternate text" /&gt; &lt;/a&gt; &lt;div
                    class="caption"&gt;
                    <em>(caption)</em>
                    &lt;/div&gt; &lt;/article&gt; &lt;article&gt; &lt;a href="<em
                    >
                      (full image URL)
                    </em>" class="image"&gt; &lt;img src="<em>
                      (thumbnail image URL)
                    </em>" alt="Alternate text" /&gt; &lt;/a&gt; &lt;div
                    class="caption"&gt;
                    <em>(caption)</em>
                    &lt;/div&gt; &lt;/article&gt;
                    <em>...</em>
                    &lt;/div&gt;
                  </code>
                </pre>

                <hr />

                <section>
                  <h4>
                    <code>gallery style1</code>
                  </h4>
                  <p>
                    A grid of thumbnails with optional lightbox support.
                    Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>small</code>
                          </td>
                          <td>Uses small thumbnails.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>medium</code>
                          </td>
                          <td>Uses medium thumbnails.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>big</code>
                          </td>
                          <td>Uses big thumbnails.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>lightbox</code>
                          </td>
                          <td>Enables lightbox behavior.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-fade-in</code>
                          </td>
                          <td>Fades in thumbnails on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-fade-in</code>
                          </td>
                          <td>Fades in thumbnails on page scroll.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>gallery style2</code>
                  </h4>
                  <p>
                    A carousel of thumbnails with optional lightbox support.
                    Supports these modifiers:
                  </p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>small</code>
                          </td>
                          <td>Uses small thumbnails.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>medium</code>
                          </td>
                          <td>Uses medium thumbnails.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>big</code>
                          </td>
                          <td>Uses big thumbnails.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>lightbox</code>
                          </td>
                          <td>Enables lightbox behavior.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-fade-in</code>
                          </td>
                          <td>Fades in thumbnails on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-fade-in</code>
                          </td>
                          <td>Fades in thumbnails on page scroll.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </section>

            <section id='reference-items'>
              <header>
                <h3>Items</h3>
              </header>
              <div className='content'>
                <h4>HTML</h4>
                <pre>
                  <code>
                    &lt;div class="items style<em>(N)</em>{' '}
                    <em>(size modifier)</em> <em>(optional modifiers)</em>"&gt;
                    &lt;section&gt;
                    <em>(content)</em>
                    &lt;/section&gt; &lt;section&gt;
                    <em>(content)</em>
                    &lt;/section&gt; &lt;section&gt;
                    <em>(content)</em>
                    &lt;/section&gt; &lt;section&gt;
                    <em>(content)</em>
                    &lt;/section&gt;
                    <em>...</em>
                    &lt;/div&gt;
                  </code>
                </pre>

                <hr />

                <section>
                  <h4>
                    <code>items style1</code>
                  </h4>
                  <p>A grid of items separated by borders.</p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>small</code>
                          </td>
                          <td>Uses small items.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>medium</code>
                          </td>
                          <td>Uses medium items.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>big</code>
                          </td>
                          <td>Uses big items.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-fade-in</code>
                          </td>
                          <td>Fades in items on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-fade-in</code>
                          </td>
                          <td>Fades in items on page scroll.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>items style2</code>
                  </h4>
                  <p>An outlined grid of items separated by borders.</p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>small</code>
                          </td>
                          <td>Uses small items.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>medium</code>
                          </td>
                          <td>Uses medium items.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>big</code>
                          </td>
                          <td>Uses big items.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-fade-in</code>
                          </td>
                          <td>Fades in items on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-fade-in</code>
                          </td>
                          <td>Fades in items on page scroll.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr />

                <section>
                  <h4>
                    <code>items style3</code>
                  </h4>
                  <p>A borderless grid of items.</p>

                  <div className='table-wrapper'>
                    <table className='alt uniform fixed'>
                      <tbody>
                        <tr>
                          <td>
                            <code>small</code>
                          </td>
                          <td>Uses small items.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>medium</code>
                          </td>
                          <td>Uses medium items.</td>
                        </tr>
                        <tr>
                          <td>
                            <code>big</code>
                          </td>
                          <td>Uses big items.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onload-fade-in</code>
                          </td>
                          <td>Fades in items on page load.</td>
                        </tr>
                        <tr className='alt'>
                          <td colSpan='2' />
                        </tr>
                        <tr>
                          <td>
                            <code>onscroll-fade-in</code>
                          </td>
                          <td>Fades in items on page scroll.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </section>

            <section id='reference-wrapper'>
              <header>
                <h3>Wrapper</h3>
              </header>
              <div className='content'>
                <h4>HTML</h4>
                <pre>
                  <code>
                    &lt;div class="wrapper <em>(optional modifiers)</em>"&gt;
                    <em>(content)</em>
                    &lt;/div&gt;
                  </code>
                </pre>

                <h4>Modifiers</h4>

                <div className='table-wrapper'>
                  <table className='alt uniform fixed'>
                    <tbody>
                      <tr>
                        <td>
                          <code>invert</code>
                        </td>
                        <td>Inverts the color scheme.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>color1</code>
                        </td>
                        <td>Uses background color #1.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>color2</code>
                        </td>
                        <td>Uses background color #2.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>color3</code>
                        </td>
                        <td>Uses background color #3.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>color4</code>
                        </td>
                        <td>Uses background color #4.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>color5</code>
                        </td>
                        <td>Uses background color #5.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>color6</code>
                        </td>
                        <td>Uses background color #6.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>color7</code>
                        </td>
                        <td>Uses background color #7.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className='wrapper style1 align-center'>
        <div className='inner'>
          <ul className='icons'>
            <li>
              <a href='#' className='icon style2 fa-twitter'>
                <span className='label'>Twitter</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon style2 fa-facebook'>
                <span className='label'>Facebook</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon style2 fa-instagram'>
                <span className='label'>Instagram</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon style2 fa-linkedin'>
                <span className='label'>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon style2 fa-envelope'>
                <span className='label'>Email</span>
              </a>
            </li>
          </ul>
          <p>&copy; Untitled.</p>
        </div>
      </footer>
    </div>
  )
}
