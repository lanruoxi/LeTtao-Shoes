$(function () {
    var getUserManageData = function (pageNum) {
        $.ajax({
            type: 'get',
            url: '/user/queryUser',
            data: {
                page: pageNum||1,
                pageSize: 5

            },
            success: function(data) {
                var userManageList = template('usermanage-template',data);
                // 把拿到的数据插入到页面中
                $('table tbody').html(userManageList);

                //分页功能
                $('.pagination').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    size: 'small',
                    currentPage: data.page,
                    totalPages: Math.ceil(data.total/data.size),
                    // 点击页面事件
                    onPageClicked: function (event, originalEvent, type, page){
                        getUserManageData(page);
                    }
                });
            }
        })
    }
    //页面载入完成，调用ajax 呈现数据
    getUserManageData();
    $('tbody').on('click', '.btn', function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var isDelete = $(this).hasClass('btn-danger') ? 1 : 0;
        if (isDelete == 1) {
            $('#manage-modal').find('.alert').html(
                '<i class="glyphicon glyphicon-info-sign"></i>你确定要禁用' + name + '吗？'
            )
        } else {
            $('#manage-modal').find('.alert').html(
                '<i class="glyphicon glyphicon-info-sign"></i>你确定要禁用' + name + '吗？'
            )
        }

        $('#manage-modal').on('click', '.btn-primary', function () {
            $.ajax({
                type: 'post',
                url: '/user/updateUser',
                data: {
                    id: id

                }
            })
        })
    })
})