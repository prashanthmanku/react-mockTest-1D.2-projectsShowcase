import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'
import {
  NavHeader,
  NavWidthCard,
  Logo,
  AppContentCard,
  WidthCard,
  Select,
  Option,
  ProjectsList,
  ProjectItem,
  Img,
  Name,
  LoaderCard,
  FailureCard,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponent'

// This is the list (static data) used in the application. You can move it to any component if needed.

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class App extends Component {
  state = {
    projectsList: [],
    activeCategory: categoriesList[0].id,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjectsData()
  }

  getProjectsData = async () => {
    const {activeCategory} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      this.setState({
        projectsList: data.projects,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSelect = e => {
    this.setState({activeCategory: e.target.value}, this.getProjectsData)
  }

  renderLoadingView = () => (
    <LoaderCard data-testid="loader">
      <Loader type="ThreeDots" color="  #328af2" height={50} width={50} />
    </LoaderCard>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state
    return (
      <ProjectsList>
        {projectsList.map(each => (
          <ProjectItem key={each.id}>
            <Img src={each.image_url} alt={each.name} />
            <Name>{each.name}</Name>
          </ProjectItem>
        ))}
      </ProjectsList>
    )
  }

  onClickRetry = () => {
    this.getProjectsData()
  }

  renderFailureView = () => (
    <FailureCard>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureCard>
  )

  renderProjectsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {activeCategory} = this.state
    return (
      <>
        <NavHeader>
          <NavWidthCard>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
              alt="website logo"
            />
          </NavWidthCard>
        </NavHeader>
        <AppContentCard>
          <WidthCard>
            <Select value={activeCategory} onChange={this.onChangeSelect}>
              {categoriesList.map(each => (
                <Option key={each.id} value={each.id}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            {this.renderProjectsView()}
          </WidthCard>
        </AppContentCard>
      </>
    )
  }
}

export default App
