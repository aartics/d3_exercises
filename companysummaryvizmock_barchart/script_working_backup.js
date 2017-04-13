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

        console.log("inside d3.json function. follow pseudo code to append svg")
        console.log(d)
        console.log($("#dataviz_barchart1").width())

        /////////////////////////////////
        // now attempt a few svg with "g"
        /////////////////////////////////

        var width_of_entire_barchart2 = $("#div_around_svg").width()
        console.log(width_of_entire_barchart2)
//         var width_of_each_bar = width_of_entire_barchart2 / (d.length*2)
//         var height_of_entire_barchart2 = 500
        var width_of_each_bar = 
        var height_of_entire_barchart2 = 20
        
        var y = d3.scale.linear()
                  .range([0, height_of_entire_barchart2])

        var chart = d3.select("#dataviz_barchart2")
                      .attr("width", width_of_entire_barchart2)
                      .attr("height", height_of_entire_barchart2)

        y.domain([0, d3.max(d, function(d) {
            return d.requests_count
        })])


        var bar = chart
            .selectAll("g")
                .data(d)
                .enter()
                .append("g")
                    .attr("transform", function(d, i) {
                        return "translate(" + i * width_of_each_bar + ",0)"
                    })

        bar.append("rect")
//             .attr("y", function(d) {
//                 return (height_of_entire_barchart2 - 300)
//             })
            .attr("width", function(d) {
                return width_of_each_bar - 5
            })
            .attr("height", function(d) {
                return y(d.requests_count)
            })
            .style("fill", "007da4")

        bar.append("rect")
           .attr("width", function(d) {
               return (width_of_each_bar)
           })
           .attr("height", function(d) {
               return y(d.requests_count_1m)
           })
           .style("fill", "red")
    })

}

$(document).ready(main)

