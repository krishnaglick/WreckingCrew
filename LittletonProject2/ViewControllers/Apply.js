﻿//When document is ready, run what's in this block
$(function () {
    var apply_view_model = new ApplyViewModel();
    ko.applyBindings(apply_view_model);
    apply_view_model.getStates();

    $('.datepicker').datepicker();

    $('#addWorkExp').click(function () {
        $('#addWorkExpModal').modal();
    })

    $('#addReference').click(function () {

    })

    $('#saveWorkExp').click(function () {

    })

    $('.modal').on('hidden.bs.modal', function () {
        $(this).find('input:text').val("");
        $(this).find('input:checkbox').attr('checked', false);
        $(this).find('select.employerState').val("");
        $(this).find('textarea').val("");
    });
})