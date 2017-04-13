var main = function() {

    $('input[name="daterange"]').daterangepicker();

    var table = $('#summarytable').DataTable( {
        lengthChange: false,
        buttons: [ 'copy', 'excel', 'pdf' ]
    } );

    table.buttons().container()
        .appendTo( '#summarytable_wrapper .col-sm-6:eq(0)' );


     $('form').submit(function(event) {

            var $input = $(event.target).find('input')
            var comment = $input.val()

            if (comment != "") {
                var html = $('<li>').text(comment)
                html.prependTo('#comments')
                $input.val("")
            }

            return false;
    })

    $(function() {

        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        cb(moment().subtract(29, 'days'), moment());

        $('#reportrange').daterangepicker({
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

    });

    //adding barchart with companies.json

//     var data1 = [{"name" :3},{"mane" : [4]},{"name" : [5,6]}]

//     d3.selectAll(".noni")
//         .selectAll("div")
//           .data(data1)
//         .enter().append("div")
//             .style("width", function(d) {
//                 return (d.name || d.mane)[0] * 10 + "px";
//             })
//             .style("color", "red")
//             .style("background-color", "blue")
//             .text(function(d) {
//                 return d.name || d.mane;
//             })

    d3.json("data/companies.json", function(d) {

        /////////////////////////////////////
        ////https://bost.ocks.org/mike/bar/2/
        /////////////////////////////////////

        console.log("#div_around_svg = divsvg: " + $("#div_around_svg").width())
        var divsvg = ($("#div_around_svg").width()/2) - 90

        var barHeight = 40;

        var x_reqcount = d3.scaleLinear()
                           .domain([0, d3.max(d, function(d) {
                               return d.requests_count
                           })])
                           .range([0, (divsvg)])

        var x_repsize = d3.scaleLinear()
                          .domain([0, d3.max(d, function(d) {
                              return d.response_size
                          })])
                          .range([0, (divsvg)])


        var chart = d3.select("#requests")
                      .attr("width", divsvg)
                      .attr("height", barHeight * d.length)
        
        var bar1 = chart.selectAll("g")
                         .data(d)
                       .enter().append("g")
                         .attr("transform", function(d, i) {
                             return "translate(" + 0 + "," + i * barHeight + ")" 
                         })

        bar1.append("rect")
             .attr("width", function(d) {
                 return (x_reqcount(d.requests_count))
             })
             .attr("height", barHeight - 1)
             .attr("fill", "steelblue")

        bar1.append("text")
              .attr("x", function(d) {
                  return x_reqcount(d.requests_count) - 50
              })
              .attr("y", barHeight / 2)
              .attr("dy", ".35em")
              .text(function(d) {
                  return d.requests_count
              })

        var chart2 = d3.select("#response")
                      .attr("width", divsvg)
                      .attr("height", barHeight * d.length)

        var bar2 = chart2.selectAll("g")
                          .data(d)
                        .enter().append("g")
                          .attr("transform", function(d, i) {
                              return "translate(" + 0 + "," + i * barHeight + ")"
                          })

        bar2.append("rect")
             .attr("width", function(d) {
                 return (x_repsize(d.response_size))
             })
             .attr("x", function(d) {
                 return (divsvg - (x_repsize(d.response_size)))
             })
             .attr("height", barHeight - 1)
             .attr("fill", "red")

        bar2.append("text")
              .attr("x", function(d) {
                  return (divsvg - (x_repsize(d.response_size)) + 10)
              })
              .attr("y", barHeight / 2)
              .attr("dy", ".35em")
              .text(function(d) {
                  return d.response_size
              })

    })

}

$(document).ready(main)

