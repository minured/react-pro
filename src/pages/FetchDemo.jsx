import React from "react";
import { Button } from "antd";

export default class FetchDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  // componentDidMount() {
  //   const url =
  //     "https://easy-mock.com/mock/5fa8b10446fe9a0d32af285f/example/mock";

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         data: data,
  //       });
  //     });
  // }

  fetchData = () => {
    const url =
      "https://easy-mock.com/mock/5fa8b10446fe9a0d32af285f/example/mock";
    fetch(url)
      .then(
        (res) => {
          return res.json();
        },
        (err) => {
          console.log(err);
        }
      )
      .then((json) => {
        console.log(json);
        this.setState({
          data: json,
        });
      });
  };
  fetchPost = () => {
    const url =
      "https://easy-mock.com/mock/5fa8b10446fe9a0d32af285f/example/upload";
    fetch(url, {
      method: "POST",
      // body是字符串类型的，一般使用 JSON.stringify
      body: "name='minu'",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  fetchMusicList = () => {
    const url =
      "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        fetch demo
        <div>{data !== null ? JSON.stringify(data) : "等待数据加载..."}</div>
        <Button onClick={this.fetchData}>fetch</Button>
        <Button onClick={this.fetchPost}>fetch post</Button>
        <Button onClick={this.fetchMusicList}>fetch baiduMusic</Button>
      </div>
    );
  }
}
