﻿$(function() {
  categoryModel = {
    listQuestionSelected: [],
    categorySelected: {
      categoryId: 0,
      learningoutcomeId: 0,
      levelId: 0
    }
  };

  categoryView = {
    init: function() {
      this.categoryItem = $(".show-category .list-group-item");
      this.categoryItem.on("click", function() {
        $(".show-category .fa", this)
          .toggleClass("fa-plus-circle")
          .toggleClass("fa-minus-circle");

        $(".show-category .list-group-item").removeClass("active");
        this.className += " active";
        $("spinner").show();
        categoryOctopus.loadQuestion(this.attributes["data-link"].value);
        categoryView.removeButtonGroup();
      });

      this.modelCategoryItem = $(".modal-category .list-group-item");
      this.modelCategoryItem.on("click", function() {
        $(".modal-category .fa", this)
          .toggleClass("fa-plus-circle")
          .toggleClass("fa-minus-circle");

        $(".modal-category .list-group-item").removeClass("active");
        this.className += " active";
        categoryOctopus.selectCategory(
          this.attributes["data-category"].value,
          this.attributes["data-lo"].value,
          this.attributes["data-level"].value
        );
      });

      this.questionListContainter = $("#list-question");
      this.moveBtn = $("#move-btn");
      this.moveBtn.on("click", function() {
        categoryView.addCheckbox();
      });

      this.moveBtnGroup = $("#move-btn-group");

      this.moveQuestionSubmitBtn = $("#move-question-btn");
      this.moveQuestionSubmitBtn.on("click", function() {
        categoryOctopus.updateCategory();
      });
    },
    setOnClickDisableBtn: function() {
      this.toggleDisableBtn = $(".toggleDisable");
      this.toggleDisableBtn.off("click");
      this.toggleDisableBtn.on("click", function() {
        categoryOctopus.toggleDisable(
          this.attributes["data-url"].value,
          $("#" + this.attributes["data-id"].value)
        );

        var categorParent = $(".list-group-item.active")
          .parents()
          .prev(".list-group-item");

        var selectedSpan = $(".list-group-item.active span")[0];
        var currentSelectedCount = selectedSpan.attributes["data-count"].value;
        selectedSpan.attributes["data-count"].value = +currentSelectedCount - 1;
        $(selectedSpan).html(
          "(" + selectedSpan.attributes["data-count"].value + ")"
        );

        $.each(categorParent, function(index, item) {
          var currentItem =$(item).children('span');
          var currentSelectedCount = currentItem.attr('data-count');
          currentItem.attr('data-count', (+currentSelectedCount - 1));
          currentItem.html(
            "(" + currentItem.attr('data-count') + ")"
          );
        });
      });
    },
    addCheckbox: function() {
      this.listCheckbox = $(".checkbox");
      this.listCheckbox.removeClass("hidden");
      this.addMoveButtonGroup();
    },
    addMoveButtonGroup: function() {
      this.moveBtnGroup.empty();
      this.moveBtnGroup.append(
        '<div class="col mb-2">' +
          '<button class="btn btn-primary float-right" id="move-btn">Move</button> ' +
          '<button class="btn btn-danger float-right mr-1" id="cancel-move">Cancel</button>' +
          "</div>"
      );

      this.cancelMove = $("#cancel-move");
      this.cancelMove.on("click", function() {
        categoryView.removeButtonGroup();
      });

      this.moveBtn = $("#move-btn");
      this.moveBtn.on("click", function() {
        categoryView.modal = $("#modal");
        categoryView.modal.modal("show");
        categoryView.listChecked = $(".checkbox[id!='select-all']:checked");
        categoryOctopus.addListSelectedQuestion();

        categoryView.modal.off("hidden.bs.modal");
        categoryView.modal.on("hidden.bs.modal", function() {
          categoryView.resetCheckList();
        });
      });
    },
    removeButtonGroup: function() {
      this.moveBtnGroup.empty();
      this.listCheckbox = $(".checkbox");
      this.listCheckbox.addClass("hidden");
      this.moveBtnGroup.append(
        '<div class="col mb-2"> <button class="btn btn-primary float-right" id="move-btn">Move Questions</button> </div>'
      );
      this.moveBtn = $("#move-btn");
      this.moveBtn.on("click", function() {
        categoryView.addCheckbox();
      });
    },
    toggleAll: function() {
      var selectAllChk = $("#select-all")[0];
      $.each($(".checkbox"), function(index, item) {
        item.checked = selectAllChk.checked;
      });
    },
    renderListQuestionSelected: function() {
      var questionCotainer = $("#selected-questions");
      questionCotainer.empty();
      var listQuestions = categoryOctopus.getListQuestionSelected();
      $.each(listQuestions, function(index, item) {
        questionCotainer.append(
          "<tr>" +
            "<td>" +
            index +
            "</td>" +
            "<td>" +
            item.code +
            "</td>" +
            "<td><i class='fa fa-times-circle text-danger remove-selected' data-index='" +
            index +
            "'></i></td>" +
            "</tr>"
        );
      });

      $(".remove-selected").on("click", function() {
        $(this)
          .parent()
          .parent()
          .remove();
        categoryOctopus.removeQuestionSelected(
          this.attributes["data-index"].value
        );
      });

      this.renderCountQuestionSelected();
    },
    renderCountQuestionSelected: function() {
      var listQuestions = categoryOctopus.getListQuestionSelected();
      $("#selected-count").html(listQuestions.length + " questions");
    },
    resetCheckList: function() {
      var listQuestionSelected = categoryOctopus.getListQuestionSelected();

      $.each($(".checkbox"), function(index, item) {
        item.checked = false;
      });

      $.each(listQuestionSelected, function(index, item) {
        $("#" + item.id + " .checkbox")[0].checked = true;
      });
    }
  };

  categoryOctopus = {
    init: function() {
      categoryView.init();
      if (categoryView.questionListContainter[0] != null) {
        this.loadQuestion(
          "/QBCS.Web/Question/GetQuestions?courseId=" +
            categoryView.questionListContainter[0].attributes["data-id"].value
        );
      }
    },
    getListQuestionSelected: function() {
      return categoryModel.listQuestionSelected;
    },
    loadQuestion: function(url) {
      $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
          categoryView.questionListContainter.html(response);
          $("#dataTable").dataTable({
            ordering: false,
            columnDefs: [
              { targets: 0, width: "5%" },
              { targets: 1, width: "75%" },
              { targets: 2, width: "15%", className: "text-center" },
              { targets: 3, width: "5%", className: "text-center" }
            ],
            columns: [
              null,
              {
                render: function(data, type, row) {
                  if (data.indexOf("[html]") >= 0) {
                    data = data.split("&lt;cbr&gt;").join("<br/>");
                    data = data.split("&lt;br&gt;").join("<br/>");
                    data = data.split("&lt;br&gt;").join("<br/>");
                    data = data.split("&lt;p&gt;").join("");
                    data = data.split("&lt;/p&gt;").join("");
                    data = data.split("&lt;span&gt;").join("");
                    data = data.split("&lt;/span&gt;").join("");
                    data = data.split("[html]").join("");
                  }

                  return data;
                }
              },
              null,
              null
            ]
          });
          categoryView.setOnClickDisableBtn();
          $("spinner")
            .removeAttr("style")
            .hide();
        }
      });
    },
    toggleDisable: function(url, item) {
      $.ajax({
        url: url,
        type: "GET",
        success: function() {
          item.remove();
        }
      });
    },
    emptyListSelected: function() {
      categoryModel.listQuestionSelected = [];
    },
    addSelectedQuestion: function(code, id) {
      categoryModel.listQuestionSelected.push({ code: code, id: id });
    },
    addListSelectedQuestion: function() {
      var listSelected = categoryView.listChecked;
      this.emptyListSelected();
      $.each(listSelected, function(index, item) {
        categoryOctopus.addSelectedQuestion(
          item.attributes["data-code"].value,
          item.attributes["data-id"].value
        );
      });

      categoryView.renderListQuestionSelected();
    },
    removeQuestionSelected: function(index) {
      categoryModel.listQuestionSelected.splice(index, 1);
      categoryView.renderCountQuestionSelected();
    },
    updateCategory: function() {
      var ids = [];
      $.each(categoryModel.listQuestionSelected, function(index, item) {
        ids.push(item.id);
      });

      $.ajax({
        url: "/QBCS.Web/Question/UpdateCategory",
        type: "POST",
        data: {
          ids: ids,
          categoryId: categoryModel.categorySelected.categoryId,
          learningOutcomeId: categoryModel.categorySelected.learningoutcomeId,
          levelId: categoryModel.categorySelected.levelId
        },
        success: function() {
          document.location.reload();
        }
      });
    },
    selectCategory: function(categoryId, loId, levelId) {
      categoryModel.categorySelected.categoryId = categoryId;
      categoryModel.categorySelected.learningoutcomeId = loId;
      categoryModel.categorySelected.levelId = levelId;
    }
  };

  categoryOctopus.init();
});
