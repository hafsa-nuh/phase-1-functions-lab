// Code your solution in this file!
function distanceFromHqInBlocks(distance ){
    // expected undefined to equal 1
    if(distance > 42) /**the distance is =43 and so its greater than 42 by 1 */{
        return distance - 42 /** the distance is =50 so (50 - 42 = 8) */
    }else {
        return 42 - distance /** distance is =34 so (42-34 = 8) */
    }
}
function distanceFromHqInFeet(inFeet){
   /** in this we are calculating the distanceFromHqInBlocks by multipling 264 [ (1*264 = 264), (8*264 = 2112), (8*264=2112)] */
    return distanceFromHqInBlocks(inFeet)* 264
}
function distanceTravelledInFeet(startingPointX , finishingPointY) /** startingPointX is = 43 and finishingPointY is = 48 , so (48 - 43 = 5 then (5 * 264 = 1320) then spx = 50 and fpy =60 so (60-50=10 then (10*264= 2640)) then spx =34 and fpy =28 so (34-28 =6 then (6*264=1584)))*/{
    let totalXY;
    if (finishingPointY > startingPointX){
        totalXY = finishingPointY - startingPointX
    }else{
        totalXY = startingPointX - finishingPointY
    }
    return totalXY * 264
}
function calculatesFarePrice(start, destination){
    let totalXY = distanceTravelledInFeet(start, destination)
    let price;
    if (totalXY <= 400){
        return price = 0
    } else if (totalXY > 400  && (totalXY <= 2000)){
        // expected 2 to equal 2.56
        return price = 2.56
    }else if(totalXY > 2000 && (totalXY <= 2500)){
        return price = 25
    }else{
        return price = `cannot travel that far`
    }
}
