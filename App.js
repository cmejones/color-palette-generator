class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                { locked: false, hex: "#FF00FF" },
                { locked: false, hex: "#FF99AA" },
                { locked: false, hex: "#0000FF" },
                { locked: false, hex: "#000000" },
                { locked: false, hex: "#5ff45f" }
            ]
            
        };
    }
    handleRandomClick() {
        let newColors = this.state.colors.map(color => {
            if (!color.locked) {
                return {
                    ...color,
                    hex:'#'+Math.floor(Math.random()*16777215).toString(16),
                };
            } else {
                return color;
            }

        });

        this.setState({
            colors: newColors,
        });
    }

    handleUnlockClick(index) {
        const newColors = this.state.colors.map((color, currentIndex) => {
            if (index === currentIndex) {
                return {
                    ...color,
                    locked: !color.locked
                }
            } else {
                return color;
            }
        })
    
        this.setState({
            colors: newColors
        })
    }
        render() {
            return <div>
                        <div className="text-center bg-dark fixed-top">
                            <button onClick={this.handleRandomClick.bind(this)} 
                            className="btn btn-secondary m-1">RANDOMIZE COLORS</button>
                        </div>
                        <div className="w-100 d-flex" style={{height: '100vh'}}>
                            <Color hex={this.state.colors[0].hex} locked={this.state.colors[0].locked} onClick={() => {this.handleUnlockClick(0)}} />
                            <Color hex={this.state.colors[1].hex} locked={this.state.colors[1].locked} onClick={() => {this.handleUnlockClick(1)}} />
                            <Color hex={this.state.colors[2].hex} locked={this.state.colors[2].locked} onClick={() => {this.handleUnlockClick(2)}} />
                            <Color hex={this.state.colors[3].hex} locked={this.state.colors[3].locked} onClick={() => {this.handleUnlockClick(3)}} />
                            <Color hex={this.state.colors[4].hex} locked={this.state.colors[4].locked} onClick={() => {this.handleUnlockClick(4)}} />
                        </div>
                    </div>

        }

}