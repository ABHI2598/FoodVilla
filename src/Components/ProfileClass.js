import React from "react";


class ProfileClass extends React.Component
{
    
    constructor(props){
        super(props);
        this.state=({
            count : 0,
            userInfo : {
                name : "Dummy Name",
                location: "Dummy Location",
            }
        })
        console.log("Child contructor")
    }

    //Called after 1st render
    async componentDidMount(){
        const data = await fetch(" https://api.github.com/users/ABHI2598");
        const json = await data.json();
        this.setState({
            userInfo: json
        })

        // this.timer = setInterval(()=>{
        //    console.log("REACT OP ");
        // },1000)
        // console.log("child componentDidMount");
    }

    //called after every render
    componentDidUpdate(prevProps, prevState){
        console.log("child componentDidUpdate");
    }

    //used for cleanup process
    
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Child component unmounted");
    }

    render()
    {
        console.log("child render")
        return(
            <>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo?.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>XYZ: {this.props.xyz}</h3>
                <h2>Location: {this.state.userInfo.location}</h2>
                <h4>count: {this.state.count}</h4>
                <button onClick={()=> this.setState({
                    count: 1,
                })}>count</button>
            </>
        );    

    }

}

export default ProfileClass;