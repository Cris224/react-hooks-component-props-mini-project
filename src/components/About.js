function About({image, about}){
    return(
    <aside>
        <img alt= "blog logo" defaultValue='https://via.placeholder.com/215' src={image}/>
        <p>{about}</p>
    </aside>
    )
}

export default About