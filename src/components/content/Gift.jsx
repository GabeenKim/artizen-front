import React from 'react';

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  toggleCheckbox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <div style={{ width: "fit-content" }}>
        <h4>투자 혜택</h4>
        <div 
          style={{
            borderTop: "1px solid grey",
            borderBottom: "1px solid grey",
            padding: "10px",
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <input 
            type="checkbox" 
            checked={this.state.isChecked} 
            onChange={this.toggleCheckbox}
           
          />
          <label>5만원 이상</label>

          {/* 조건을 체크박스 옆에 표시 */}
          <span style={{ marginLeft: "10px" }}>조건{this.state.isChecked ? "체크됨" : "체크 안됨"}</span>

          {/* 선물1과 선물2를 항상 표시 */}
          <span style={{ marginLeft:"10px" }}>선물1</span>
          <span style={{ marginLeft:"10px" }}>선물2</span>
        </div>
      </div> 
    );
  }
}


export default Gift;