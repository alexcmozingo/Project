var drawBars5 = function(contacts, target3, xScale, yScale5, graph)
    {
        target3
            .selectAll("rect")
                .data(contacts)
                .enter()
                .append("rect")
                .attr("id", "contacts")
                .attr("x", function(pref)
                    {
            return xScale(pref.Part)
        })
                .attr("y", function(pref)
                    {
            return yScale5(pref.Percentage)
        })
                .attr("width",xScale.bandwidth)
                .attr("height", function(pref)
                        {
                return graph.height-yScale5(pref.Percentage)  
        })
            
.on("mouseenter" ,function(pref)
    {
        
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
        
        
        d3.select("#league")
        .text(pref.Percentage);
        })
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
        })
    }


var initGraph5 = function(contacts)
    {
        
        
        var screen = {width:800,height:600}
        
        var margins = {left:50,right:200,top:50,bottom:50}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
    
    
        
        d3.select("#thirdGraph")
            .attr("width", screen.width)
            .attr("height", screen.height)
        
         
        var xScale = d3.scaleBand()
            .domain(["Helmet", "Shoulder", "Forearm/Elbow", "Knee", "Thigh", "Foot", "Playing Surface", "Unknown"])
            .range([0,graph.width])
            .paddingInner(.2)
        var yScale5 = d3.scaleLinear()
            .domain([0,1])
            .range([graph.height,0]);
        
         var target3 = d3.select("#thirdGraph")
            .append("g")
            .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
        
        
        drawBars5(contacts, target3, xScale, yScale5, graph);
        drawLabels5(graph, margins);
        drawAxes5(graph,margins,xScale,yScale5);

    }

var drawLabels5 = function(graph, margins)
{
    var labels = d3.select("#thirdGraph")
        .append("g")
        .classed("labels", true)
        
    labels.append("text")
        .text("Body Part that Caused the Concussion")
        .classed("title", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", margins.top+(10))
    
    labels.append("text")
        .text("Percentage")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("transform", "translate(18," + (graph.height/2)+") rotate(270) ")
    
    labels.append("text")
        .text("Body Part")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", graph.height+margins.top+margins.bottom-(10))
    
}


var drawAxes5 = function(graph,margins,
                         xScale,yScale5)
{

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale5);
        
        var axes = d3.select("#thirdGraph")
            .append("g")
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")")
            .call(xAxis)
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top)+")")
            .call(yAxis)

 
}







var successFCN = function(contacts)
{
    console.log("contacts",contacts);
    initGraph5(contacts);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var actionPromise = d3.csv("contacts.csv")

actionPromise.then(successFCN,failFCN);