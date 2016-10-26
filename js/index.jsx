var server = "https://divac-cv.herokuapp.com/";
const NavList = React.createClass({
    getInitialState: function() {
        return {
            list:[]
        };
    },
    render:function() {
        return (
            <ul id="navList">
              {this.state.list.map((result, index) => {
                return (<li className="liBox" key={index}><a href={"#"+result}>{result}</a></li>);
              })}
            </ul>
               
        );
    },
    componentDidMount: function() {
          $.getJSON(server,function(data){
              this.setState ({
                    list:Object.keys(data)
                });              
          }.bind(this));
    }    
    
});
ReactDOM.render(<NavList />, document.getElementById("reactNavList"));
