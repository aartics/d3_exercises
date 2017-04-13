var main = function() {

    $('#reportrange').daterangepicker();

    $(function() {

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

        $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
            console.log('hi')
            console.log(window.location.href)
            console.log(picker.startDate.format('X'))
            console.log(picker.endDate.format('X'))

            var newdates = "/" + picker.startDate.format('X') + "/" + picker.endDate.format('X') + "/"
            redirectToDate(newdates)
        })

        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        cb(moment().subtract(29, 'days'), moment());

        function redirectToDate(newurl) {
            console.log(newurl)
        }

    });
}

$(document).ready(main)