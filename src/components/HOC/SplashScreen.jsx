import React, { Component } from 'react'
import FadeInOut from './FadeInOut'

export function SplashMessage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-32 w-32 bg-white animate-ping"></div>
    </div>
  )
}

export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
      }
    }

    async componentDidMount() {
      try {
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          })
        }, 1500)
      } catch (err) {
        console.log(err)
        this.setState({
          loading: false,
        })
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage()

      // otherwise, show the desired route
      return (
        <FadeInOut show={true}>
          <WrappedComponent {...this.props} />
        </FadeInOut>
      )
    }
  }
}
