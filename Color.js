class Color extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.hex}} 
            className="w-100 d-flex flex-column align-items-center justify-content-center"
            >
                    <h1>{this.props.hex}</h1>
                    <button onClick={this.props.onClick} className={ this.props.locked ? 'btn btn-dark' : 'btn btn-outline-dark' }>
                        { this.props.locked ? 'UNLOCK' : 'LOCK' }
                    </button>
            </div>
        )
    }
}
