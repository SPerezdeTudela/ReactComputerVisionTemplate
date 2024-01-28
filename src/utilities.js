//Define LabelMap
//Not sure if I'm doing this correctly
const labelMap = 
{
    0:{name: 'A', color: 'red'},
    1:{name: 'B', color: 'blue'},
    2:{name: 'C', color: 'yellow'},
    3:{name: 'D', color: 'lime'},
    4:{name: 'E', color: 'purple'}
}

//Defining a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for(let i = 0; i<boxes.length; ++i)
    {
        if(boxes[i] && classes[i] && scores[i] > threshold)
        {
            const [y,x,height,width] = boxes[i]
            const text = classes[i]

            //Set Styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Ariel'

            //Draw
            ctx.beginPath()
            //Takes name + the accuracy score I think
            ctx.fillText(labelMap[text]['name'] + '-' + 
                        Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgHeight/2, height*imgHeight/1.5)
            ctx.stroke 
            
            
        }
    }
}