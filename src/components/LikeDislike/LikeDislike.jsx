import * as React from "react";
import { render } from "react-dom";
import c from "classnames";
import "./like.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

class Buttons extends React.Component {
  state = {
    like: 0,
    dislike: 0,
    likeActive: false,
    dislikeActive: false,
  };

  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1,
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1,
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }

  render() {
    return (
      <div className="wrapperlikedislike">
        <button
          onClick={() => this.handleLike()}
          className={c({ ["active"]: this.state.likeActive })}>
          <AiOutlineLike fontSize={25} />
          {this.state.like}
        </button>
        <button
          className={c({ ["active"]: this.state.dislikeActive })}
          onClick={() => this.handleDislike()}>
          <AiOutlineDislike fontSize={25} />
          {this.state.dislike}
        </button>
      </div>
    );
  }
}

export function LikeDislikeButton() {
  return <Buttons />;
}
