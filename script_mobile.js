(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        } else
            e['call'](this);
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","lockedOrientation":"portrait","start":"this.playAudioList([this.audio_9E78F8C9_8913_A742_41CB_E31CBC4C4960], true); this.init()","data":{"locales":{"en":"locale/en.txt"},"history":{},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"pitch":1},"defaultLocale":"en","name":"Player2015"},"children":["this.MainViewer_mobile","this.Image_96A420AE_8481_25F4_41DD_91B7AACD1CD7_mobile","this.Image_84296B18_88EE_DAC3_41C7_CB661FAD5F81_mobile","this.IconButton_9B1F62EC_897E_AB43_41DC_62D8D24AAE27_mobile","this.IconButton_9832755C_8971_A943_41E0_1E4642A983EF_mobile","this.IconButton_98E182AC_8971_ABC2_41DD_376375240260_mobile","this.Image_9B9FFF66_8931_F94E_41D8_DD576D94E7BE_mobile","this.Image_9A3F8835_8932_A6CD_41D9_43FAAFB2EEA1_mobile"],"class":"Player","minHeight":0,"hash": "a7f56edf36e2bb9d4598272df3c64c33e785f8cb65d16a49296fc11fb165f446", "definitions": [{"right":"7%","data":{"name":"Image38466"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_9B9FFF66_8931_F94E_41D8_DD576D94E7BE_mobile.url'),"top":"33.75%","scaleMode":"fit_inside","horizontalAlign":"center","width":"85%","verticalAlign":"middle","propagateClick":false,"height":"30%","visible":false,"backgroundOpacity":0,"id":"Image_9B9FFF66_8931_F94E_41D8_DD576D94E7BE_mobile"},{"class":"PlayList","id":"playList_92A09505_89F6_EECD_41DB_1F34A3FD6F99","items":[{"player":"this.MainViewer_mobileVideoPlayer","class":"VideoPlayListItem","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', false); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_92A09505_89F6_EECD_41DB_1F34A3FD6F99, 0, '#000000')","media":"this.video_9E273D04_891E_5EC3_41DA_98B6E327337E","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)"}]},{"class":"FadeInEffect","id":"effect_9AC07FE8_8932_5943_41AD_5602BAF00F45","duration":2000,"easing":"quint_in"},{"class":"PlayList","id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC_camera","media":"this.panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC"}]},{"transparencyActive":true,"verticalAlign":"middle","data":{"name":"IconButton23932"},"class":"IconButton","minHeight":1,"minWidth":1,"backgroundColor":[],"top":"33.74%","horizontalAlign":"center","iconURL":"skin/IconButton_9832755C_8971_A943_41E0_1E4642A983EF.png","height":30,"width":30,"propagateClick":false,"backgroundColorRatios":[],"left":"24.21%","visible":false,"backgroundOpacity":0.3,"id":"IconButton_9B1F62EC_897E_AB43_41DC_62D8D24AAE27_mobile"},{"enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_9058277B_89F2_A946_41D9_3F306E465FD1","class":"PanoramaCamera","id":"panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC_camera"},{"label":trans('video_956534F6_8481_ED54_41D3_BEF494A5BCB5.label'),"video":"this.videores_95729012_8481_64AD_416F_DCEBE72D2ABE","thumbnailUrl":"media/video_956534F6_8481_ED54_41D3_BEF494A5BCB5_t.jpg","data":{"label":"\u0645\u0646\u0637\u0642\u06472 \u067e\u0627\u062f\u0646\u0627"},"class":"Video","width":1280,"height":720,"id":"video_956534F6_8481_ED54_41D3_BEF494A5BCB5"},{"class":"FadeInEffect","id":"effect_93DD0A1F_89F2_5AFD_41AF_8093246DB8C8","duration":500},{"autoplay":true,"class":"MediaAudio","id":"audio_9E78F8C9_8913_A742_41CB_E31CBC4C4960","data":{"label":"03_Del Rikhteh (WwW_KhaTeRaT_ORG)"},"audio":"this.audiores_9F90C60F_8916_6ADE_41D0_2D784DD3188D"},{"displayPlaybackBar":true,"displayPlayOverlay":true,"clickAction":"play_pause","class":"VideoPlayer","id":"MainViewer_mobileVideoPlayer","viewerArea":"this.MainViewer_mobile"},{"class":"FadeOutEffect","id":"effect_931EEEAA_89F3_BBC6_41D0_086FDEDD0C42","duration":500},{"enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_9D4ABC2F_8933_DEDE_41A7_5E9F43D9F99F","class":"PanoramaCamera","id":"panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3_camera"},{"mode":"quality","viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","touchControlMode":"drag_rotation","aaEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","id":"MainViewer_mobilePanoramaPlayer","gyroscopeEnabled":true},{"autoplay":true,"class":"MediaAudio","id":"audio_9C401893_8912_67C6_41BB_8AB58844A0C1","data":{"label":"03_Del Rikhteh (WwW_KhaTeRaT_ORG)"},"audio":"this.audiores_9FD2FB0D_8916_DAC2_41DD_D7CC82F77D92"},{"class":"FadeOutEffect","id":"effect_9A11C1AB_8936_A9C6_41C6_E68CBF9C0C32","duration":500},{"class":"FadeInEffect","id":"effect_93C362E4_89EE_6B42_41D9_D87D265C6A72","duration":500},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"mobilevr","height":512,"colCount":6,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC_0/{face}/vr/0.jpg"}]}}],"label":trans('panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC.label'),"data":{"label":"photo_2025-08-06_15-39-00"},"hfovMin":"150%","thumbnailUrl":"media/panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC_t.jpg","vfov":180,"hfov":360,"class":"Panorama","id":"panorama_90BA1107_89F2_A6CE_41D0_622E55F1E6EC","hfovMax":130},{"label":trans('panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2.label'),"hfovMax":130,"data":{"label":"1 (8)"},"thumbnailUrl":"media/panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2_t.jpg","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":1536,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2_0/{face}/1/{row}_{column}.jpg"},{"tags":"mobilevr","height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2_0/{face}/vr/0.jpg"}]}}],"hfovMin":"150%","overlays":["this.overlay_93743E7F_89F2_5B3D_41D6_3A8CCB908413"],"vfov":180,"id":"panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2","hfov":360},{"label":trans('video_9E273D04_891E_5EC3_41DA_98B6E327337E.label'),"video":"this.videores_9E2140D4_8912_E743_41BA_F93182184C95","thumbnailUrl":"media/video_9E273D04_891E_5EC3_41DA_98B6E327337E_t.jpg","data":{"label":"55"},"class":"Video","width":1920,"height":1080,"id":"video_9E273D04_891E_5EC3_41DA_98B6E327337E"},{"data":{"name":"Image12201"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_96A420AE_8481_25F4_41DD_91B7AACD1CD7_mobile.url'),"top":"0%","scaleMode":"fit_outside","horizontalAlign":"center","show":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9AC07FE8_8932_5943_41AD_5602BAF00F45, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_98E182AC_8971_ABC2_41DD_376375240260_mobile); visibleFunc(this.IconButton_9832755C_8971_A943_41E0_1E4642A983EF_mobile); visibleFunc(this.IconButton_9B1F62EC_897E_AB43_41DC_62D8D24AAE27_mobile); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 3000, this.effect_9BFB9039_8932_A6C5_41E0_C48075B10C90, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9B9FFF66_8931_F94E_41D8_DD576D94E7BE_mobile); visibleFunc(this.Image_9A3F8835_8932_A6CD_41D9_43FAAFB2EEA1_mobile); visibleFunc(this.Image_84296B18_88EE_DAC3_41C7_CB661FAD5F81_mobile)","width":"100%","verticalAlign":"middle","propagateClick":false,"height":"100%","left":"0%","backgroundOpacity":0,"id":"Image_96A420AE_8481_25F4_41DD_91B7AACD1CD7_mobile"},{"id":"Image_9A3F8835_8932_A6CD_41D9_43FAAFB2EEA1_mobile","right":"7%","data":{"name":"Image38528"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_9A3F8835_8932_A6CD_41D9_43FAAFB2EEA1_mobile.url'),"scaleMode":"fit_inside","bottom":"5.03%","horizontalAlign":"center","width":"85%","verticalAlign":"middle","propagateClick":false,"height":"30%","visible":false,"backgroundOpacity":0},{"transparencyActive":true,"id":"IconButton_9832755C_8971_A943_41E0_1E4642A983EF_mobile","verticalAlign":"middle","right":"25.47%","data":{"name":"IconButton23932"},"class":"IconButton","minHeight":1,"minWidth":1,"backgroundColor":[],"bottom":"36.03%","horizontalAlign":"center","iconURL":"skin/IconButton_9832755C_8971_A943_41E0_1E4642A983EF.png","width":30,"height":30,"propagateClick":false,"backgroundColorRatios":[],"visible":false,"backgroundOpacity":0.3},{"class":"FadeInEffect","id":"effect_93EE7A32_89F2_FAC6_41D4_6EC72DA83964","duration":500},{"label":trans('panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3.label'),"hfovMax":130,"data":{"label":"dji_fly_\u06f2\u06f0\u06f2\u06f2\u06f0\u06f9\u06f1\u06f0_\u06f1\u06f9\u06f3\u06f1\u06f4\u06f4_874_1673641693144_pano_optimized"},"thumbnailUrl":"media/panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3_t.jpg","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":1536,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3_0/{face}/1/{row}_{column}.jpg"},{"tags":"mobilevr","height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3_0/{face}/vr/0.jpg"}]}}],"hfovMin":"150%","overlays":["this.overlay_90002153_89F1_E945_41C2_5D0C7E46186E"],"vfov":180,"id":"panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3","hfov":360},{"enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_72473C56_7F69_0DCB_41C2_0B171E0E957B","class":"PanoramaCamera","id":"panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2_camera"},{"class":"PlayList","id":"playList_92A1B492_89F6_EFC7_41CE_BF0D1D092747","items":["this.PanoramaPlayListItem_92A5B544_89F6_E943_41A7_B7B45DFC9767"]},{"class":"FadeInEffect","id":"effect_931ECEAA_89F3_BBC6_41D7_AA754D11E046","duration":500},{"right":"7%","data":{"name":"Image2239"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_84296B18_88EE_DAC3_41C7_CB661FAD5F81_mobile.url'),"top":"1.95%","scaleMode":"fit_inside","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.playList_92A1A492_89F6_EFC7_41D0_5224085DB8FE, this.PanoramaPlayListItem_92A69543_89F6_E945_41C9_29E266EADB1F, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setMediaBehaviour(this.playList_92A1A492_89F6_EFC7_41D0_5224085DB8FE, 0, null, false); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_9A11C1AB_8936_A9C6_41C6_E68CBF9C0C32, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_98E182AC_8971_ABC2_41DD_376375240260_mobile); invisibleFunc(this.Image_96A420AE_8481_25F4_41DD_91B7AACD1CD7_mobile); invisibleFunc(this.Image_84296B18_88EE_DAC3_41C7_CB661FAD5F81_mobile); invisibleFunc(this.IconButton_9832755C_8971_A943_41E0_1E4642A983EF_mobile); invisibleFunc(this.IconButton_9B1F62EC_897E_AB43_41DC_62D8D24AAE27_mobile)","width":"85%","propagateClick":false,"height":"30%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"id":"Image_84296B18_88EE_DAC3_41C7_CB661FAD5F81_mobile","cursor":"hand"},{"label":trans('panorama_72762ACB_7F69_0ADA_41C6_CD86B9FB4F08.label'),"hfovMax":130,"data":{"label":"1 (7)"},"thumbnailUrl":"media/panorama_72762ACB_7F69_0ADA_41C6_CD86B9FB4F08_t.jpg","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_72762ACB_7F69_0ADA_41C6_CD86B9FB4F08_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":1536,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_72762ACB_7F69_0ADA_41C6_CD86B9FB4F08_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_72762ACB_7F69_0ADA_41C6_CD86B9FB4F08_0/{face}/1/{row}_{column}.jpg"},{"tags":"mobilevr","height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_72762ACB_7F69_0ADA_41C6_CD86B9FB4F08_0/{face}/vr/0.jpg"}]}}],"hfovMin":"150%","overlays":["this.overlay_909C12C6_89F2_6B4F_41D6_64A75E9E15F4"],"vfov":180,"id":"panorama_72762ACB_7F69_0ADA_41C6_CD86B9FB4F08","hfov":360},{"label":trans('panorama_7133C290_7F69_1547_41C3_89E50615E442.label'),"hfovMax":130,"data":{"label":"1 (3)"},"thumbnailUrl":"media/panorama_7133C290_7F69_1547_41C3_89E50615E442_t.jpg","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7133C290_7F69_1547_41C3_89E50615E442_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":1536,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_7133C290_7F69_1547_41C3_89E50615E442_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_7133C290_7F69_1547_41C3_89E50615E442_0/{face}/1/{row}_{column}.jpg"},{"tags":"mobilevr","height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_7133C290_7F69_1547_41C3_89E50615E442_0/{face}/vr/0.jpg"}]}}],"hfovMin":"150%","overlays":["this.overlay_9020684D_89F2_675D_41D0_218E4C40B293"],"vfov":180,"id":"panorama_7133C290_7F69_1547_41C3_89E50615E442","hfov":360},{"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadowColor":"#000000","displayTooltipInTouchScreens":false,"toolTipShadowColor":"#333138","data":{"name":"Main Viewer"},"toolTipPaddingLeft":3,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipTextShadowColor":"#000000","progressRight":"33%","progressBorderSize":0,"playbackBarHeight":10,"minWidth":50,"toolTipFontFamily":"Arial","playbackBarHeadShadow":true,"playbackBarHeadWidth":6,"progressOpacity":0.7,"playbackBarBorderColor":"#FFFFFF","minHeight":25,"subtitlesFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","toolTipShadowBlurRadius":1,"vrPointerSelectionTime":2000,"progressLeft":"33%","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"subtitlesGap":0,"playbackBarBackgroundOpacity":1,"playbackBarRight":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionColor":"#FF6600","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"class":"ViewerArea","progressBorderRadius":2,"playbackBarBottom":5,"toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","progressHeight":2,"playbackBarHeadShadowBlurRadius":1.5,"progressBarBackgroundColorDirection":"horizontal","toolTipTextShadowBlurRadius":1,"playbackBarHeadShadowOpacity":0.7,"surfaceReticleColor":"#FFFFFF","toolTipPaddingRight":3,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"playbackBarLeft":0,"toolTipBorderRadius":1,"playbackBarHeadHeight":15,"subtitlesTop":0,"propagateClick":false,"subtitlesTextShadowColor":"#000000","id":"MainViewer_mobile","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000"},{"class":"FadeInEffect","id":"effect_93029D7C_89F2_5943_41E0_0784EEFDDA05","duration":500},{"class":"FadeOutEffect","id":"effect_93057D7C_89F2_5943_41D3_36D3B29A05B9","duration":500},{"class":"PlayList","id":"playList_92A1A492_89F6_EFC7_41D0_5224085DB8FE","items":["this.PanoramaPlayListItem_92A69543_89F6_E945_41C9_29E266EADB1F"]},{"verticalAlign":"middle","right":"42.82%","data":{"name":"IconButton23932"},"class":"IconButton","minHeight":1,"minWidth":1,"backgroundColor":[],"top":"41%","horizontalAlign":"center","iconURL":"skin/IconButton_9832755C_8971_A943_41E0_1E4642A983EF.png","height":30,"width":30,"propagateClick":false,"backgroundColorRatios":[],"transparencyActive":true,"visible":false,"backgroundOpacity":0.3,"id":"IconButton_98E182AC_8971_ABC2_41DD_376375240260_mobile"},{"label":trans('panorama_9C8D4E9B_8932_5BC5_41D1_6E3F018FAE1A.label'),"hfovMax":130,"data":{"label":"1 (5)"},"thumbnailUrl":"media/panorama_9C8D4E9B_8932_5BC5_41D1_6E3F018FAE1A_t.jpg","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9C8D4E9B_8932_5BC5_41D1_6E3F018FAE1A_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","height":1536,"colCount":18,"width":9216,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_9C8D4E9B_8932_5BC5_41D1_6E3F018FAE1A_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","height":1024,"colCount":12,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_9C8D4E9B_8932_5BC5_41D1_6E3F018FAE1A_0/{face}/1/{row}_{column}.jpg"},{"tags":"mobilevr","height":1536,"colCount":6,"width":9216,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_9C8D4E9B_8932_5BC5_41D1_6E3F018FAE1A_0/{face}/vr/0.jpg"}]}}],"hfovMin":"150%","overlays":["this.overlay_90BC347D_89EE_AF42_41DC_EEAF936DA43F"],"vfov":180,"id":"panorama_9C8D4E9B_8932_5BC5_41D1_6E3F018FAE1A","hfov":360},{"class":"FadeInEffect","id":"effect_9BFB9039_8932_A6C5_41E0_C48075B10C90","duration":500},{"class":"PanoramaCameraSequence","id":"sequence_9058277B_89F2_A946_41D9_3F306E465FD1","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"levels":["this.videolevel_9215B055_89F6_E74C_4198_B4A8609D1937"],"hasAudio":false,"width":1280,"class":"VideoResource","height":720,"id":"videores_95729012_8481_64AD_416F_DCEBE72D2ABE"},{"class":"AudioResource","id":"audiores_9F90C60F_8916_6ADE_41D0_2D784DD3188D","mp3Url":trans('audiores_9F90C60F_8916_6ADE_41D0_2D784DD3188D.mp3Url')},{"class":"PanoramaCameraSequence","id":"sequence_9D4ABC2F_8933_DEDE_41A7_5E9F43D9F99F","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"class":"AudioResource","id":"audiores_9FD2FB0D_8916_DAC2_41DD_D7CC82F77D92","mp3Url":trans('audiores_9FD2FB0D_8916_DAC2_41DD_D7CC82F77D92.mp3Url')},{"areas":["this.HotspotPanoramaOverlayArea_903E7017_89F2_66CE_41C4_E3EE80F21018"],"id":"overlay_93743E7F_89F2_5B3D_41D6_3A8CCB908413","maps":[],"items":[{"distance":50,"data":{"label":"Image"},"pitch":4.61,"image":"this.res_93D834DE_89F3_AF7E_41CE_06095EFA43B6","yaw":13.37,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Image"}},{"levels":["this.videolevel_920B80B3_89F6_E7C5_41E0_4B4C425A5BAE"],"hasAudio":false,"width":1920,"class":"VideoResource","height":1080,"id":"videores_9E2140D4_8912_E743_41BA_F93182184C95"},{"areas":["this.HotspotPanoramaOverlayArea_9036E2D6_89F1_EB4F_41CD_06FF58883A91"],"id":"overlay_90002153_89F1_E945_41C2_5D0C7E46186E","maps":[],"items":[{"distance":50,"data":{"label":"Image"},"pitch":14.23,"image":"this.res_93D834DE_89F3_AF7E_41CE_06095EFA43B6","yaw":72.83,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Image"}},{"class":"PanoramaCameraSequence","id":"sequence_72473C56_7F69_0DCB_41C2_0B171E0E957B","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"class":"PanoramaPlayListItem","camera":"this.panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3_camera","media":"this.panorama_9C64E3B6_8933_E9CF_41DE_3DB79791EFB3","id":"PanoramaPlayListItem_92A5B544_89F6_E943_41A7_B7B45DFC9767","player":"this.MainViewer_mobilePanoramaPlayer"},{"areas":["this.HotspotPanoramaOverlayArea_937842F6_89F2_6B4F_41DD_CFCBA89BB935"],"id":"overlay_909C12C6_89F2_6B4F_41D6_64A75E9E15F4","maps":[],"items":[{"distance":50,"data":{"label":"Image"},"pitch":6.1,"image":"this.res_93D834DE_89F3_AF7E_41CE_06095EFA43B6","yaw":15.89,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Image"}},{"areas":["this.HotspotPanoramaOverlayArea_904B49C4_89F2_5943_41D7_7C9BDAE8E56C"],"id":"overlay_9020684D_89F2_675D_41D0_218E4C40B293","maps":[],"items":[{"distance":50,"data":{"label":"Image"},"pitch":-6.09,"image":"this.res_93D834DE_89F3_AF7E_41CE_06095EFA43B6","yaw":-7.83,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Image"}},{"class":"PanoramaPlayListItem","camera":"this.panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2_camera","media":"this.panorama_727FB384_7F69_3B4F_41D8_1719CF2A46B2","id":"PanoramaPlayListItem_92A69543_89F6_E945_41C9_29E266EADB1F","player":"this.MainViewer_mobilePanoramaPlayer"},{"areas":["this.HotspotPanoramaOverlayArea_9367C4A0_89EE_AFC2_41D2_0564AD9E4FD4"],"id":"overlay_90BC347D_89EE_AF42_41DC_EEAF936DA43F","maps":[],"items":[{"distance":50,"data":{"label":"Image"},"pitch":12.49,"image":"this.res_93D834DE_89F3_AF7E_41CE_06095EFA43B6","yaw":-39.34,"vfov":9.36,"hfov":5.6,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"Image"}},{"type":"video/mp4","url":trans('videolevel_9215B055_89F6_E74C_4198_B4A8609D1937.url'),"width":1280,"bitrate":4143,"class":"VideoResourceLevel","framerate":59.94,"height":720,"id":"videolevel_9215B055_89F6_E74C_4198_B4A8609D1937","posterURL":trans('videolevel_9215B055_89F6_E74C_4198_B4A8609D1937.posterURL')},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_903E7017_89F2_66CE_41C4_E3EE80F21018","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_93029D7C_89F2_5943_41E0_0784EEFDDA05, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_93057D7C_89F2_5943_41D3_36D3B29A05B9, 'hideEffect', false)}.bind(this)"},{"class":"ImageResource","levels":[{"height":151,"width":151,"class":"ImageResourceLevel","url":"media/res_93D834DE_89F3_AF7E_41CE_06095EFA43B6_0.png"}],"id":"res_93D834DE_89F3_AF7E_41CE_06095EFA43B6"},{"type":"video/mp4","url":trans('videolevel_920B80B3_89F6_E7C5_41E0_4B4C425A5BAE.url'),"width":1920,"bitrate":9321,"class":"VideoResourceLevel","framerate":59.94,"height":1080,"id":"videolevel_920B80B3_89F6_E7C5_41E0_4B4C425A5BAE","posterURL":trans('videolevel_920B80B3_89F6_E7C5_41E0_4B4C425A5BAE.posterURL')},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9036E2D6_89F1_EB4F_41CD_06FF58883A91","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_93DD0A1F_89F2_5AFD_41AF_8093246DB8C8, 'showEffect', false)}.bind(this)"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_937842F6_89F2_6B4F_41DD_CFCBA89BB935","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_931ECEAA_89F3_BBC6_41D7_AA754D11E046, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_931EEEAA_89F3_BBC6_41D0_086FDEDD0C42, 'hideEffect', false)}.bind(this)"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_904B49C4_89F2_5943_41D7_7C9BDAE8E56C","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_93EE7A32_89F2_FAC6_41D4_6EC72DA83964, 'showEffect', false)}.bind(this)"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9367C4A0_89EE_AFC2_41D2_0564AD9E4FD4","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_93C362E4_89EE_6B42_41D9_D87D265C6A72, 'showEffect', false)}.bind(this)"}],"minWidth":0,"mute":true,"backgroundColor":["#FFFFFF"],"gap":10,"scrollBarMargin":2,"scripts":{"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPixels":TDV.Tour.Script.getPixels,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initQuiz":TDV.Tour.Script.initQuiz,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"registerKey":TDV.Tour.Script.registerKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setLocale":TDV.Tour.Script.setLocale,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"translate":TDV.Tour.Script.translate,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"isPanorama":TDV.Tour.Script.isPanorama,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMapLocation":TDV.Tour.Script.setMapLocation,"existsKey":TDV.Tour.Script.existsKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"clone":TDV.Tour.Script.clone,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playAudioList":TDV.Tour.Script.playAudioList,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"mixObject":TDV.Tour.Script.mixObject,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"openLink":TDV.Tour.Script.openLink,"quizFinish":TDV.Tour.Script.quizFinish,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getKey":TDV.Tour.Script.getKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeJS":TDV.Tour.Script.executeJS,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"textToSpeech":TDV.Tour.Script.textToSpeech,"createTween":TDV.Tour.Script.createTween,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer},"watermark":false,"backgroundPreloadEnabled":false,"backgroundColorRatios":[0],"propagateClick":false,"height":"100%","width":"100%","layout":"absolute","scrollBarColor":"#000000","creationPolicy":"inAdvance"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.18.js.map
})();
//Generated with v2022.2.18, Fri Aug 8 2025