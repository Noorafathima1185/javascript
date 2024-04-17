// w.a.p to display  numbers whose exponential is in the range of 8-36 where user can input power value

// power=2  1 ,4 ,9 ,16 ,25 ,36 ,49 = 3,4,5
// power=3  1 ,8 , 27 ,64 = 2,3

p=2
i=1
while (i<=36) {
    if (i**p>8 && i**p<36) {
        console.log(i)
    }
    i++
}