#  Contains:

## Topics..?

### Flashing Card Game/ Quiz?
- level depending on:
  - question easy/hard?
  - 3 or 5 lifes
- what happens when lifes are 0?
  - restart? conflict with randomizing deck
  - time-based regaining?
-  how to regain lifes?
   -  watch a video (and pay me money)
   -  over time?


## Design-System: 
> buttons, carousel, slideshow, accordion, navbar, forms, sidepanel, flyout menu, modal, 

## Theme-switch?
>light/dark/third?

## Keep in mind:

1. well-designed UI
2. Functionality (purpose)
3. Data Management (storing or interacting with API -storing/retrieving/displaying)
4. Testing (does it work? does it ensure different user activity?)
5. Documentation (Readme, how to install and use)

## Technologies to include
### REACT:
> Function Components;
> API fetch? Async await
> local storage
> Forms /Inputs 
> Navigation  
> Routing
    including: PageNotFound/ 404/error.message , dynamic links?, sublinks?, path="/" navigato to home 

### General
> work with git!
> CSS Architecture : 
    BEM over everything! - Blocks, elements and modifiers 
    why? Modularity, Reusability, Structure
    z.B. button__state_success 
> Error Handling 

## Hooks
> useState;
    what is the default state?
    const [count,setCount] = useState(4)    
    count: current state, setCount = function that updates current state
> useReducer:
    Statemanagement more complex, ensures different actions
> useEffect
    for lifeCycle (mounted, changed, unmounted)
> useContext 
    > provides context and values for components without using props
    (bei props müsste jeder state immer ans jeweilige child weitergegeben werden
    states können über eine context.Provider für einen bestimmten bereich freigegeben werden. in dem jederzeit direkt da!

> useRef 
    (cursor ins input field, needs no re-rendering)
> useMemo?
> useParams
    for dynamic links only?
> useLocation 
> useCallback


