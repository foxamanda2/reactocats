import React from 'react'

export class OctocatArticle extends React.Component {
  render() {
    console.log(this.props)
    return (
      <article>
        <a href={this.props.imagelink}>
          <img
            className="image"
            src={this.props.image}
            width="400"
            height="400"
          />
        </a>
        <ul>
          <li>
            {this.props.number}
            <a href={this.props.imagelink}>
              <strong>{this.props.name}</strong>
            </a>
          </li>

          <li>
            <a href={this.props.creatorlink}>
              <img
                src={this.props.creatorimage}
                width="24px"
                height="24px"
                alt={this.props.creatorname}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
