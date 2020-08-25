import Head from 'next/head'
import Layout from '../components/layout'
import Top from '../components/top'
import styles from '../styles/Home.module.css'
import Clock from 'react-live-clock'
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CodeStats</title>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div>
          <Top/>
        </div>
        <div className="events">
          <div className="event-title-card">
            <div className="event-title-content">Upcoming Events</div>
          </div>
        </div>
        <div className="about-description" id="about">
          <div className="grad-text" >About</div>
        </div>
        <div className="connect-body" id="connect">
          <hr className="line2"></hr>
          <div id="left">
            <h1 className="connect-text">
              <i className="fab fa-linkedin"></i> {' '}Linked In
              <p className="sub" id="center">@qwertyu</p>
            </h1>
          </div>
          <div id="center">
            <h1 className="connect-text">
              <i className="fab fa-facebook"></i>{' '} Facebook
              <p className="sub" id="center">@qwertyu</p>
            </h1>
          </div>
          <div id="right">
            <h1 className="connect-text">
              <i className="fab fa-instagram"></i>{' '}Instagram
              <p className="sub" id="center">@qwertyu</p>
            </h1>
          </div>
        </div>
      
</Layout>
  )
}
