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

}

$(document).ready(main)