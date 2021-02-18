import React, { Component } from 'react'
import { OctocatArticle } from './components/OctocatArticle'
import articles from './articles'

export class App extends Component {
  render() {
    const octocatsFromData = articles.map(article => (
      <OctocatArticle
        key={article.id}
        name={article.name}
        number={article.number}
        image={article.image}
        imagelink={article.imagelink}
        creatorlink={article.creatorlink}
        creatorimage={article.creatorimage}
        creatorname={article.creatorname}
      />
    ))
    return (
      <body>
        {/* <header>
          <nav class="firstmenu">
            <ul>
              <li>
                <a href="#">
                  <svg
                    height="32"
                    class="octicon octicon-mark-github mr-2"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    aria-hidden="true"
                    title="GitHub"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <strong>
                  <a href="#">Octodex</a>
                </strong>
              </li>
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li class="github">
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header> */}
        <main>
          {octocatsFromData}
          {/* <OctocatArticle
            name="IronCat"
            number="#24:"
            image="https://octodex.github.com/images/ironcat.jpg"
            imagelink="https://octodex.github.com/ironcat/"
            creatorlink="https://github.com/cameronmcefee"
            creatorimage="https://github.com/cameronmcefee.png"
            creatorname="cameronmcefee"
          />
          <OctocatArticle
            name="Hulatocat"
            number="#139:"
            image="https://octodex.github.com/images/hula_loop_octodex03.gif"
            imagelink="https://octodex.github.com/hulatocat/"
            creatorlink="https://github.com/heyhayhay"
            creatorimage="https://github.com/heyhayhay.png"
            creatorname="heyhayhay"
          />
          <OctocatArticle
            name="Dinotocat"
            number="#130:"
            image="https://octodex.github.com/images/dinotocat.png"
            imagelink="https://octodex.github.com/dinotocat/"
            creatorlink="https://github.com/kimestoesta"
            creatorimage="https://github.com/kimestoesta.png"
            creatorname="kimestoesta"
          />
          <OctocatArticle
            name="McEfeeline"
            number="#127:"
            image="https://octodex.github.com/images/mcefeeline.jpg"
            imagelink="https://octodex.github.com/mcefeeline/"
            creatorlink="https://github.com/tonyjaramillo"
            creatorimage="https://github.com/tonyjaramillo.png"
            creatorname="tonyjaramillo"
          />
          <OctocatArticle
            name="Skitchtocat"
            number="#91:"
            image="https://octodex.github.com/images/skitchtocat.png"
            imagelink="https://octodex.github.com/skitchtocat/"
            creatorlink="https://github.com/jonrohan"
            creatorimage="https://github.com/jonrohan.png"
            creatorname="jonrohan"
          />
          <OctocatArticle
            name="Adventure Cat"
            number="#68:"
            image="https://octodex.github.com/images/adventure-cat.png"
            imagelink="https://octodex.github.com/adventure-cat/"
            creatorlink="https://github.com/jonrohan"
            creatorimage="https://github.com/jonrohan.png"
            creatorname="jonrohan"
          />
          <OctocatArticle
            name="Bear Cavalry"
            number="#43:"
            image="https://octodex.github.com/images/bear-cavalry.png"
            imagelink="https://octodex.github.com/bear-cavalry/"
            creatorlink="https://github.com/cameronmcefee"
            creatorimage="https://github.com/cameronmcefee.png"
            creatorname="cameronmcefee"
          />
          <OctocatArticle
            name="Octobi Wan Carnobi"
            number="#3:"
            image="https://octodex.github.com/images/octobiwan.jpg"
            imagelink="https://octodex.github.com/octobiwan/"
            creatorlink="https://github.com/cameronmcefee"
            creatorimage="https://github.com/cameronmcefee.png"
            creatorname="cameronmcefee"
          />
          <OctocatArticle
            name="Stormtroopocat"
            number="#85:"
            image="https://octodex.github.com/images/stormtroopocat.png"
            imagelink="https://octodex.github.com/stormtroopocat/"
            creatorlink="https://github.com/jeejkang"
            creatorimage="https://github.com/jeejkang.png"
            creatorname="jeejkang"
          />
          <OctocatArticle
            name="X-tocat"
            number="#35:"
            image="https://octodex.github.com/images/xtocat.jpg"
            imagelink="https://octodex.github.com/xtocat/"
            creatorlink="https://github.com/cameronmcefee"
            creatorimage="https://github.com/cameronmcefee.png"
            creatorname="cameronmcefee"
          />
          <OctocatArticle
            name="Daftpunktocar-Guy"
            number="#100:"
            image="https://octodex.github.com/images/daftpunktocat-guy.gif"
            imagelink="https://octodex.github.com/daftpunktocat-guy/"
            creatorlink="https://github.com/jeejkang"
            creatorimage="https://github.com/jeejkang.png"
            creatorname="jeejkang"
          />
          <OctocatArticle
            name="Where's Waldocar"
            number="#52:"
            image="https://octodex.github.com/images/waldocat.png"
            imagelink="https://octodex.github.com/wheres-waldocat/"
            creatorlink="https://github.com/jasoncostello"
            creatorimage="https://github.com/jasoncostello.png"
            creatorname="jasoncostello"
          />
          <OctocatArticle
            name="Murakaicat"
            number="#130:"
            image="https://octodex.github.com/images/murakamicat.png"
            imagelink="https://octodex.github.com/murakamicat/"
            creatorlink="https://github.com/billyroh"
            creatorimage="https://github.com/billyroh.png"
            creatorname="billyroh"
          />
          <OctocatArticle
            name="Homercat"
            number="#81:"
            image="https://octodex.github.com/images/homercat.png"
            imagelink="https://octodex.github.com/homercat/"
            creatorlink="https://github.com/nickh"
            creatorimage="https://github.com/nickh.png"
            creatorname="nickh" 
          />*/}
        </main>
        {/* <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer> */}
      </body>
    )
  }
}
