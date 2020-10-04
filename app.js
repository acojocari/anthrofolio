{/*List of all images to be displayed
 TODO need to find a why to do it dynamically, no matter the name of the images*/}
const nameImages=[
    {name:"1",},{name:"2",},{name:"3",},{name:"4",},
    {name:"5",},{name:"6",},{name:"7",},{name:"8",},
    {name:"9",},{name:"10",},{name:"11",},{name:"12",},
    {name:"13",},{name:"14",},{name:"15",},{name:"16",}]

{/*Header component
that returns dynamically the title
from App using the propos attributes*/}
const Header = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

{/*Header component
that returns dynamically the title
from App using the propos attributes*/}
const Footer = (props) => {
    return(
        <footer>
            <p>{props.title}</p>
        </footer>
    );
}

{/*Image's component*/}
const Image = (props) => {
    return(
        <div className="eachimage">
            {/*TODO need to find a why to do it dynamically*/}
            <img src={"./public/gallery/" + props.name + ".JPG"}/>
        </div>
    )
}

{/*App's Composition*/}
const App = (props) => {
    return(
        <div>

            <Header title="Photos of Life in Rural Moldova"/>

            <div className="gallery">
                {props.staticImages.map( image =>
                    <Image name = {image.name} />)}
            </div>

            <Footer title="Made with ❤️ by Anatol"/>

        </div>
    )
}

{/*Display all components in the UI with JSX*/}
ReactDOM.render(
    <App staticImages = {nameImages}/>,
    document.getElementById('root')
);