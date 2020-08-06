 import React, { Component } from 'react';
import { Card,CardImg, CardBody } from 'reactstrap';
class New extends Component {

    constructor(props){
        super(props)
            this.state = {
               field: true
            }
        //creates a reference for your element to use
        this.discussions = React.createRef()
        this.blogs = React.createRef()
        this.resources = React.createRef()
        this.events = React.createRef()
     }
 
     handleOnClick = (event) => {
         //.current is verification that your element has rendered
         if(this.discussions.current){
             this.discussions.current.scrollIntoView({ 
                behavior: "smooth", 
                block: "nearest"
             })
         }
         if(this.blogs.current){
            this.discussions.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
        if(this.resources.current){
            this.discussions.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
        if(this.events.current){
            this.discussions.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
     }

    render() {
        return (
        <div className="row">
         <div className="column">
            <Card>
                <CardBody>
                    <CardImg className="card-img"  src={require('./discussion.JPG')} alt="nothing" />
                </CardBody>
                <button onClick={this.discussions} className="btn btn-primary btn-block">Discussion</button>
            </Card>
        </div>
        <div className="column">
            <Card>
                <CardBody className="card-title">
                    <CardImg className="card-img" onClick={this.blogs} src={require('./blogs.JPG')} alt="nothing" />
                </CardBody>
                <button onClick={this.discussions} className="btn btn-primary btn-block">Blogs</button>
            </Card>
        </div>
        <div className="column">
            <Card>
                <CardBody className="card-title">
                    <CardImg className="card-img" onClick={this.resources} src={require('./Resources.JPG')} alt="nothing" />
                </CardBody>
                <button onClick={this.discussions} className="btn btn-primary btn-block">Resources</button>
            </Card>
        </div>
        <div className="column">
            <Card>
                <CardBody>
                    <CardImg className="card-img" onClick={this.events} src={require('./events.jpg')} alt="nothing" />
                </CardBody>
                <button onClick={this.discussions} className="btn btn-primary btn-block">Events</button>
            </Card>
        </div>
        <div className="card-title" ref={this.discussions}>
             <h2> Discussions</h2>
             <p className="introduction">
             A discussion group is a group of individuals, typically who share a similar interest, who gather either formally or informally to discuss ideas, solve problems, or make comments. Common methods of conversing including meeting in person, conducting conference calls, using text messaging, or using a website such as an Internet forum.[1] People respond, add comments, and make posts on such forums, as well as on established mailing lists, in news groups, or in IRC channels.[2] Other group members could choose to respond by posting text or image.
                    </p>
        </div>
        <div className="card-title" ref={this.blogs}>
              <h2>Blogs</h2>
              <p className="introduction">
              A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.
              </p>
        </div>
        <div className="card-title" ref={this.resources}>
              <h2>Resources</h2>
              <p className="introduction">
                     A resource is a source or supply from which a benefit is produced and that has some utility. Resources can broadly be classified upon their availability — they are classified into renewable and non-renewable resources. They can also be classified as actual and potential on the basis of the level of development and use, on the basis of origin they can be classified as biotic and abiotic, and on the basis of their distribution, as ubiquitous and localised (private, community-owned , natural and international resources). An item becomes a resource with time and developing technology. The benefits of resource utilization may include increased wealth, proper functioning of a system, or enhanced well-being. From a human perspective, a natural resource is anything obtained from the environment to satisfy human needs and wants
              </p>
        </div>
        <div className="card-title" ref={this.events}>
             <h2> Events</h2>
             <p className="introduction">
             An event is something which happens or takes place. An event is brief, possibly extremely brief. Contrast with a process, which takes time.
             </p>
        </div>
        </div>
        )
    }
}
export default New;
