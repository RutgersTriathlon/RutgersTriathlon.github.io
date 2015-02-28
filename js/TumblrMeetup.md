#Content Providers

###Introduction

- Create a URI, then you can simply call delete
- Glorified URI matcher

###Why this approach?

- Restructuring the db will break the client if the client depends on a certain structure
- Hiccup
	- More restful
	- UI and persistence can evolve at the same time

###Use Cases

- Prototype Apps
	- Start with in memory models and then switch over
- Medium Sized Apps
	- Parallelize work in the UI and the backend
- Platform Apps
	- Cross versioning

#Thoughts on Two ORMs

- Cupboard
	- Pros : wrapper around SQLite, POJOs, Converters, Migrations
	- Cons : Batch Support , No Relationships , Repo activity

- Realm
	- Pros : Clean builder-type API, Cross platform
	- Cons : API broken, getter and setters required , Performance is bad, no content provider support

#Color Correction OpenGL on Android
- Apply processing to each individual pixel, pixels are not dependant on each other

###How do you do this on Android?
- Apply a colorFilter : Costly, due to each pixel is perform sequentially
- Apply a RenderScript : Push the bitmap from the CPU to the GPU, costly if doing video
- Open GL ES : Decoder can code directly to the GPU from the CPU is faster

###How does Open GL Rendering work?
- Designed for 3d rendering
- Verticies are sent to the vertex shader, then the Fragment Shader which outputs the image onto the surface texture view

#Transitions
- No transitions so the user gets lost

###Blame Game
- Users will blame you or themselves

###Examples
- Google Calendar Play Games, , slide up transition
- Google Calendar, transition in the snackbar
- Ping , Reveal in and out

###Min SDK 21 Android Lolli
- Start thinking transitions first
- Correct architectire
- Gracefully degrade after you get the transition

###What are the APIs
- Transition.java
	- Hero Transition : One screen to the next screen, content moves from one screen to the next
	- Content Transition : Reveal content, the content is not traveling from one screen to the next
- TransitionListener
	- Hook into activity transitions to know when the start and end
- Activity and Fragment
	- Implement your own SharedElementCallback : shares the element from one activity/fragment to the next

###What is not related
- TransitionManager & Scene, these are no longer used

###Defaults
- Content Transition : Default to fade if not specified
- Hero Transition : Default to move if not specified

#Building Maintainable Android Applications
- App vs Application
	- Think about building an application not an app
- Ticker with a string caused $100,000 of issues
- You must build a system counter software entropy
- How will each compent be tested over its lifetime?
- What eads to the min cost of development including QA time
- Library makes it easy to adda feature but harder to test, is it worth it?
- Legacy code is code without tests

###Testing Strategy

- Manual QA : high cost
- Customers in production : bad reviews
- Automated UI : appium
- Integration Tests : Expression
- JUnit Testing

###Functional Testing Challenges

- Generic Problems

###Unit Testing

- Narrow in scope, 1 case for 1 method
- Do not test the Android platform therefore are fast

###Keep Android at ARM's length

- How do you build your app for testing, you wont have enough test structure to make sure this app never crashes.
- ViewModels : in your UI layer
	- Aim to pull all presentation logic out of the model
	- "Presentation Logic" , colors visibility ect
	- Fragment is responsible for loading models networking, finding view and threading

- Pitfalls
	- Creating a viewmodel getter for every view property
	- Keeps references of the view
- Pros : 
	- Easy to test
	- Smaller fragments / activities
- Cons : 
	- Not great for click handlers and screen interaction
	- More code

###Summary
- You are building a system not just an app
- Cost of testing over a long time becomes expensive