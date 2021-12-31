import React, { Component } from "react";
import Newsitem from "./Newsitem";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5615b375bbaf48c5a008bbc6fa48e80e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    console.log("componentdidmount");
    this.fetchData();
  }

  // async updateNews() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5615b375bbaf48c5a008bbc6fa48e80e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // }

  // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=5615b375bbaf48c5a008bbc6fa48e80e&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };
  //  handleNextClick = async () => {
  //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
  //     } else {
  //       let url = `https://newsapi.org/v2/top-headlines?country=${
  //         this.props.country
  //       }&category=${
  //         this.props.category
  //       }&apiKey=5615b375bbaf48c5a008bbc6fa48e80e&page=${
  //         this.state.page + 1
  //       }&pageSize=${this.props.pageSize}`;
  //       this.setState({ loading: true });
  //       let data =  await fetch(url);
  //       let parsedData = await data.json();
  //       console.log(parsedData);
  //       this.setState({
  //         page: this.state.page + 1,
  //         articles: parsedData.articles,
  //         loading: false,
  //       });
  //     }
  //   };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5615b375bbaf48c5a008bbc6fa48e80e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News Monkey - Top{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          Headlines
        </h1>
        {this.state.loading ? <Spinner /> : null}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row my-4">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-sm-4 my-2" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 85) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 160)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
