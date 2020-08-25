import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Reset() {
  return (
    <Layout>
      <Head>
        <title>Reset</title>
      </Head>
      <div className="auth-wrapper">
       <div className="auth-inner">
          <form>
             <div className="form-group">
                <img className="img" src="/images/forgot_password.JPG" alt="nothing"/>
             </div>
             <div className="form-group">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
             </div>
             <div className="form-group forgot-password ">
                <button type="submit" className="btn btn-primary btn-block">Send reset link</button>
             </div>

         </form>
       </div>
      </div>
    </Layout>
  )
}