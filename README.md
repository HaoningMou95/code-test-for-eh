# This is a react app could generate unique color combination and plot as a rgb dot image.  
## Create for EH code test

## Result

![alt text](src/result/hello_world.png?raw=true "HELLO WORLD")
![alt text](src/result/50x50.png?raw=true "50x50")
![alt text](src/result/100x100.png?raw=true "100x100")
![alt text](src/result/164x194.png?raw=true "164x194")

## How to use 
```
npm i
npm start
```

open __localhost:3000__ to view the result

## How did i conquer this problem
1. I use react to build this app, because it is easy to build a single page app with react. 
2. To break down each color break downs by using for loop. 
3. To generate a random color combination. 
  * Solution 1 - Simply use for loops to loop though all colors to generate combinations. Not ideal for time complexity.
  * Solution 2 - Use recursive function to generate color combinations in order to have better performance.  
4. Use Canvas to plot the color combinations according to pixel coordinates. 

