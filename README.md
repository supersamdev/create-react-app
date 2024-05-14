# Dashboard with charts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
### Project Approach Document
The goal of this project is to create a responsive and user-friendly dashboard using React and Chart.js. The dashboard will display data using at least three different types of charts. The design will be clean and optimized for both desktop and mobile devices.

### 1. Initial Setup
* **Create React App**: Start by initializing a new React project using Create React App for a simple setup.
    ```
    npx create-react-app dashboard-project
    ```
* **Install Dependencies**: Install necessary libraries, including Chart.js and its React wrapper (react-chartjs-2).
    ```
    npm install chart.js react-chartjs-2
    ```
### 2. Project Structure
Organize the project files into the following structure:
```
/src
  /components
    /chartcomponent1
        ChartComponent1.tsx
        ChartComponent1.css
    /chartcomponent2
        ChartComponent2.tsx
        ChartComponent2.css
    /chartcomponent3
        ChartComponent3.tsx
        ChartComponent3.css
    /main
        Main.tsx
        Main.css
    /navbar
        Navbar.tsx
        Navbar.css
  App.tsx
  index.tsx
  index.css

```
### 3. Designing the Dashboard Layout
* Here's what App.tsx looks like:
    ```
    const App = () =>  {
    return (
        <div className="container-fluid">
            <Navbar />
            <Main/>
        </div>
    );
    };

    export default App;
    ```
* And here's what Main.tsx will look like:
    ```
    const Main = () => {
        return(
            <main>
                <div className="main__container">
                    
                    <div className="main__title">
                        ...
                    </div>

                    <div className="main__cards">
                        ...
                    </div>

                    <div className="charts">
                        <div className="charts__left">
                            <div className="charts__left__title">
                                ...
                            </div>
                            <ChartComponent1 />
                        </div>

                        <div className="charts__right">
                            <div className="charts__right__title">
                                ...
                            </div>

                            <div className="charts__right__cards">
                                <div className="card2">
                                    <ChartComponent2 />
                                </div>

                                <div className="card2">
                                    <ChartComponent3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    ```


### 4. Deploy on Vercel
* Push the code to a GitHub repository.

    `https://github.com/supersamdev/create-react-app`
* Connect the repository to Vercel.
* Deploy the application and share the live demo link.

    `https://create-react-app-sigma-ruby.vercel.app/`