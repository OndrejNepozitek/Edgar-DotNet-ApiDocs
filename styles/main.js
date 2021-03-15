// Use container fluid
var containers = $(".container");
containers.removeClass("container");
containers.addClass("container-fluid");

$(function() {
    setTimeout(() => {
        $(".nav.level1 >li").addClass("in");
    }, 200)
})

$(function() {
    $("h3").each(function(index, el) {
        var $h3 = $(el);
        var name = $.trim($h3.text());
        
        if (name === "Constructors") {
            return true;
        }

        $table = $("<table></table>").addClass("tableSummarySection");

        var siblings = $h3.nextUntil("h3", "h4");
        siblings.each(function(index, item) {
            var $item = $(item);
            var $summary = $item.next();
            var href = $item.find("a").first().attr("href");
            console.log(href);
            console.log($item.text() + " " + $summary.text());
            $table.append("<tr><td><a href='" + href + "'>" + $item.text() + "</a></td><td>" + $summary.text() + "</td></tr>")
        
        });

        $h3.after($table);
    });
})

