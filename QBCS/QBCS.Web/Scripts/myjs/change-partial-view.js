﻿function bt_change_partial(url, btn) {

        $.get(url, {}, function (response) {
            $("#question-import").html(response);
            $('#dataTable').DataTable();
        });
        $(".btn-group > .btn").removeClass("active");
        $(btn).addClass("active");
}

function nav_bar_active() {
    $('.navbar-nav a').click(function (e) {
        $('.navbar-nav').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });
}

function customs_display() {
    $.each($(".customs-display"), function () {
        var content;
        content = $(this).html();
        if (content.indexOf("[html]") >= 0) {
            content = content.split("<cbr>").join("&lt;br&gt;");
            content = content.split("&lt;cbr&gt;").join("<br/>");
            content = content.split("<br>").join("<br/>");
            content = content.split("&lt;br&gt;").join("&lt;br&gt;");
            content = content.split("&lt;br/&gt;").join("<br/>");
            content = content.split("&lt;p&gt;").join("");
           
            content = content.split("&lt;/p&gt;").join("");
            content = content.split("&lt;b&gt;").join("");
            content = content.split("&lt;/b&gt;").join("");
            content = content.split("&lt;span&gt;").join("");
            content = content.split("&lt;/span&gt;").join("");
            content = content.split("&lt;/span&gt;").join("");
            content = content.split("&lt;u&gt;").join("");
            content = content.split("&lt;/u&gt;").join("");
            content = content.split("&lt;i&gt;").join("");
            content = content.split("&lt;/i&gt;").join("");
            content = content.split("&lt;sub&gt;").join("<sub>");
            content = content.split("&lt;/sub&gt;").join("</sub>");
            content = content.split("&lt;sup&gt;").join("<sup>");
            content = content.split("&lt;/sup&gt;").join("</sup>");
            content = content.split("[html]").join("");
        }
        $(this).html(content);
    });
}
function customs_display_duplicate() {
    var content;
    content = $('#customs-display-duplicate').html();
    if (content.indexOf("[html]") >= 0) {
        content = content.split("&lt;cbr&gt;").join("<br/>");
        content = content.split("&lt;br&gt;").join("<br/>");
        content = content.split("&lt;p&gt;").join("");
        content = content.split("&lt;br/&gt;").join("<br/>");
        content = content.split("&lt;/p&gt;").join("");
        content = content.split("&lt;b&gt;").join("");
        content = content.split("&lt;/b&gt;").join("");
        content = content.split("&lt;span&gt;").join("");
        content = content.split("&lt;/span&gt;").join("");
        content = content.split("&lt;/span&gt;").join("");
        content = content.split("&lt;u&gt;").join("");
        content = content.split("&lt;/u&gt;").join("");
        content = content.split("&lt;i&gt;").join("");
        content = content.split("&lt;/i&gt;").join("");
        content = content.split("&lt;sub&gt;").join("<sub>");
        content = content.split("&lt;/sub&gt;").join("</sub>");
        content = content.split("&lt;sup&gt;").join("<sup>");
        content = content.split("&lt;/sup&gt;").join("</sup>");
        content = content.split("[html]").join("");
    }
    $('#customs-display-duplicate').html(content);
}

function split() {
    var table1 = $('#tableEditable').DataTable({
        columns: [
            null,
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }       
                    return data
                }
            },
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }               
                    return data
                }
            },
            null
        ],
        columnDefs: [
            { targets: 0, width: "2%" },
            { targets: 1, width: "44%" },
            { targets: 2, width: "44%"},
            { targets: 3, width: "10%"}
        ]
    });
    var table2 = $('#tableDelete').DataTable({
        columns: [
            null,
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }
                   
                    return data
                }
            },
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");  
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }
                    
                    return data
                }
            }
        ]
    });
    var table3 = $('#tableSuccess').DataTable({
        columns: [
            null,
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }
                    
                    return data
                }
            },
        ],
        columnDefs: [
            { targets: 0, width: "2%" },
            { targets: 1, width: "98%" }
        ]
    });
    var table4 = $('#tableInvalid').DataTable({
        columns: [
            null,
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");            
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }

                    return data
                }
            },
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }
                    return data
                }
            },
            null
        ],
        columnDefs: [
            { targets: 0, width: "2%" },
            { targets: 1, width: "68%" },
            { targets: 2, width: "20%" },
            { targets: 3, width: "10%" }
        ]
    });

    table1.on('page.dt', function () {
        $('html, body').animate({
            scrollTop: $(".dataTables_wrapper").offset().top
        }, 'slow');
    });

    table2.on('page.dt', function () {
        $('html, body').animate({
            scrollTop: $(".dataTables_wrapper").offset().top
        }, 'slow');
    });

    table3.on('page.dt', function () {
        $('html, body').animate({
            scrollTop: $(".dataTables_wrapper").offset().top
        }, 'slow');
    });

    table4.on('page.dt', function () {
        $('html, body').animate({
            scrollTop: $(".dataTables_wrapper").offset().top
        }, 'slow');
    });

    var tableCustoms = $('#table-customs').DataTable({
        columns: [
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }

                    return data
                }
            },
            {
                "render": function (data, type, row) {
                    if (data.indexOf("[html]") >= 0) {
                        data = data.split("&lt;cbr&gt;").join("<br/>");
                        data = data.split("&lt;br&gt;").join("<br/>");
                        data = data.split("&lt;p&gt;").join("");
                        data = data.split("&lt;br/&gt;").join("<br/>");
                        data = data.split("&lt;b&gt;").join("");
                        data = data.split("&lt;/b&gt;").join("");
                        data = data.split("&lt;/p&gt;").join("");
                        data = data.split("&lt;span&gt;").join("");
                        data = data.split("&lt;/span&gt;").join("");
                        data = data.split("&lt;u&gt;").join("");
                        data = data.split("&lt;/u&gt;").join("");
                        data = data.split("&lt;i&gt;").join("");
                        data = data.split("&lt;/i&gt;").join("");
                        data = data.split("&lt;sub&gt;").join("<sub>");
                        data = data.split("&lt;/sub&gt;").join("</sub>");
                        data = data.split("&lt;sup&gt;").join("<sup>");
                        data = data.split("&lt;/sup&gt;").join("</sup>");
                        data = data.split("[html]").join("");
                    }
                    return data
                }
            }
        ],
        columnDefs: [
            { targets: 0, width: "50%" },
            { targets: 1, width: "50%" },
        ]
    });
    tableCustoms.on('page.dt', function () {
        $('html, body').animate({
            scrollTop: $(".dataTables_wrapper").offset().top
        }, 'slow');
    });
}

function toggleTableDuplicate() {
    $(".toggle-table").on('click', function () {
        $(".table-toggle").addClass("hidden");
        $(this.attributes["data-toggle"].value).removeClass("hidden");
    });
}

function table_on_top() {
    var table = $('#dataTable')
    table.on('page.dt', function () {
        $('html, body').animate({
            scrollTop: $(".dataTables_wrapper").offset().top
        }, 'slow');
    });
}
function spinner_loading() {

}
$(document).ready(function () {
    nav_bar_active();
    split();
    toggleTableDuplicate();
    customs_display();
    customs_display_duplicate();
    table_on_top();
});
