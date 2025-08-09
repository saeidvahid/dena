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
var script = {"defaultMenu":["fullscreen","mute","rotation"],"lockedOrientation":"portrait","start":"this.playAudioList([this.audio_9B9DDD1B_8E71_0EAC_41CA_C8538C66E9B1], true); this.get('data').surfaceSelectionHotspotMode = 'circleEnabled'; this.init()","data":{"locales":{"en":"locale/en.txt"},"history":{},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"pitch":1},"name":"Player16255","defaultLocale":"en"},"children":["this.MainViewer","this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6","this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9","this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99","this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A","this.IconButton_8313DA00_8E2E_3F50_41B6_FFBCA38DB678"],"minHeight":0,"id":"rootPlayer","minWidth":0,"class":"Player","backgroundColor":["#FFFFFF"],"hash": "e602534e480a2d194d2cbd1480a3084fca6213c92058a41d2f0df620414ea914", "definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_83CC206A_8D93_376F_41E0_F1FCB70D275F","enterPointingToHorizon":true,"id":"panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_camera","class":"PanoramaCamera"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_8332006A_8D93_376F_41C8_A91B2A691085","enterPointingToHorizon":true,"id":"panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_camera","class":"PanoramaCamera"},{"changing":"var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)","class":"PlayList","id":"mainPlayList","items":["this.PanoramaPlayListItem_805DEDBC_8E2E_74B0_41B4_514B1EADD628","this.PanoramaPlayListItem_805D3DBD_8E2E_74B0_4166_DFB114F9EDE4","this.PanoramaPlayListItem_805D7DBD_8E2E_74B0_41D6_B588DF0CD0AB",{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000')","media":"this.video_8273E621_8D93_7A9C_41C3_C119F0974B3F","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)"}]},{"verticalAlign":"middle","right":"43.97%","data":{"name":"Button40540"},"pressedIconURL":"skin/IconButton_8313DA00_8E2E_3F50_41B6_FFBCA38DB678_pressed.png","minHeight":0,"id":"IconButton_8313DA00_8E2E_3F50_41B6_FFBCA38DB678","minWidth":0,"class":"IconButton","bottom":"3.65%","mode":"toggle","horizontalAlign":"center","iconURL":"skin/IconButton_8313DA00_8E2E_3F50_41B6_FFBCA38DB678.png","rollOverIconURL":"skin/IconButton_8313DA00_8E2E_3F50_41B6_FFBCA38DB678_rollover.png","width":40,"height":40,"propagateClick":false,"transparencyActive":true,"backgroundOpacity":0},{"autoplay":true,"class":"MediaAudio","id":"audio_9B9DDD1B_8E71_0EAC_41CA_C8538C66E9B1","loop":true,"data":{"label":"Faramarz Aslani - To"},"audio":"this.audiores_981CF10F_8E71_16A5_41D9_2DEE89C3C086"},{"label":trans('panorama_83D8383A_8D93_16EC_41CD_75E66254BF33.label'),"hfov":360,"data":{"label":"dji_fly_\u06f2\u06f0\u06f2\u06f2\u06f0\u06f9\u06f1\u06f0_\u06f1\u06f9\u06f3\u06f1\u06f4\u06f4_874_1662822857216_pano_optimized"},"thumbnailUrl":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_t.jpg","frames":[{"thumbnailUrl":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_t.jpg","cube":{"levels":[{"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/0/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/2/{row}_{column}.jpg","width":3072},{"tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E500C31_8D91_0EFD_41E0_BFFE23ADAE8A"],"vfov":180,"id":"panorama_83D8383A_8D93_16EC_41CD_75E66254BF33","hfovMax":130},{"label":trans('video_9C4BD882_8DF7_179C_41D6_A2D9089924BE.label'),"video":"this.videores_9D74196C_8DF7_096B_41A8_183E001CC581","thumbnailUrl":"media/video_9C4BD882_8DF7_179C_41D6_A2D9089924BE_t.jpg","data":{"label":"\u0645\u0646\u0637\u0642\u06473 \u067e\u0627\u062f\u0646\u0627"},"width":1280,"class":"Video","height":720,"id":"video_9C4BD882_8DF7_179C_41D6_A2D9089924BE"},{"label":trans('panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621.label'),"hfov":360,"data":{"label":"d (12)"},"thumbnailUrl":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_t.jpg","frames":[{"thumbnailUrl":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_t.jpg","cube":{"levels":[{"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/0/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/2/{row}_{column}.jpg","width":3072},{"tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E7E9FE1_8D91_099C_41D5_38E227B371C2"],"vfov":180,"id":"panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621","hfovMax":130},{"label":trans('video_8273E621_8D93_7A9C_41C3_C119F0974B3F.label'),"video":"this.videores_8267E8BF_8D93_37E5_41C1_D6A617E82967","thumbnailUrl":"media/video_8273E621_8D93_7A9C_41C3_C119F0974B3F_t.jpg","data":{"label":"55"},"width":1920,"class":"Video","height":1080,"scaleMode":"fit_outside","id":"video_8273E621_8D93_7A9C_41C3_C119F0974B3F"},{"right":"34%","data":{"name":"Image17943"},"minHeight":1,"minWidth":1,"class":"Image","url":trans('Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9.url'),"top":"3.67%","scaleMode":"fit_inside","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_805DEDBC_8E2E_74B0_41B4_514B1EADD628, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_994B012A_8D97_76EC_41E0_AF45071F8190, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"30%","propagateClick":false,"height":"30%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"id":"Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9","cursor":"hand"},{"id":"effect_9E0A0480_8D91_1F9C_41D8_33EEB08B5D14","duration":500,"class":"FadeInEffect"},{"right":"34%","data":{"name":"Image18044"},"minHeight":1,"id":"Image_9DD65D76_8D91_0967_41CD_98E05CDA240A","minWidth":1,"url":trans('Image_9DD65D76_8D91_0967_41CD_98E05CDA240A.url'),"class":"Image","scaleMode":"fit_inside","bottom":"1.66%","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_805D7DBD_8E2E_74B0_41D6_B588DF0CD0AB, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_99E740D2_8D91_17BF_41CC_78E8B87AFC77, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"30%","propagateClick":false,"height":"30%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"cursor":"hand"},{"id":"MainViewerPanoramaPlayer","mode":"quality","class":"PanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","aaEnabled":true,"adjacentPanoramaPositionsEnabled":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":true},{"id":"effect_99E740D2_8D91_17BF_41CC_78E8B87AFC77","duration":500,"class":"FadeOutEffect"},{"label":trans('panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D.label'),"hfov":360,"data":{"label":"d (7)"},"thumbnailUrl":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_t.jpg","frames":[{"thumbnailUrl":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_t.jpg","cube":{"levels":[{"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/0/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/2/{row}_{column}.jpg","width":3072},{"tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E81D767_8D9F_1965_41E0_674B8E4A886E"],"vfov":180,"id":"panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D","hfovMax":130},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_8332706B_8D93_376D_41C3_867E205604C2","enterPointingToHorizon":true,"id":"panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_camera","class":"PanoramaCamera"},{"displayPlaybackBar":true,"id":"MainViewerVideoPlayer","class":"VideoPlayer","clickAction":"play_pause","displayPlayOverlay":true,"viewerArea":"this.MainViewer"},{"id":"Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6","data":{"name":"Image17075"},"minHeight":1,"minWidth":1,"url":trans('Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6.url'),"class":"Image","scaleMode":"fit_outside","bottom":"0%","horizontalAlign":"center","show":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9CBF2F2F_8D91_0AE5_41CB_944B9F12E456, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"100%","verticalAlign":"middle","propagateClick":false,"height":"100%","left":"0%","backgroundOpacity":0},{"id":"effect_9942C46E_8D91_1F64_41D6_1245D2AC4E0D","duration":500,"class":"FadeInEffect"},{"id":"effect_9CBF2F2F_8D91_0AE5_41CB_944B9F12E456","duration":8000,"class":"FadeInEffect"},{"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadowColor":"#000000","toolTipShadowColor":"#333138","data":{"name":"Main Viewer"},"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipTextShadowColor":"#000000","progressRight":"33%","progressBorderSize":0,"playbackBarHeight":10,"minWidth":100,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"playbackBarHeadWidth":6,"progressOpacity":0.7,"minHeight":50,"subtitlesFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"progressLeft":"33%","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"subtitlesGap":0,"playbackBarBackgroundOpacity":1,"playbackBarRight":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionColor":"#FF6600","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"playbackBarBottom":5,"progressBorderRadius":2,"toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","progressHeight":2,"class":"ViewerArea","playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadowOpacity":0.7,"surfaceReticleColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"playbackBarLeft":0,"playbackBarHeadHeight":15,"subtitlesTop":0,"propagateClick":false,"subtitlesTextShadowColor":"#000000","id":"MainViewer","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000"},{"right":"34%","data":{"name":"Image17995"},"minHeight":1,"id":"Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99","minWidth":1,"url":trans('Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99.url'),"class":"Image","scaleMode":"fit_inside","bottom":"34%","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_805D3DBD_8E2E_74B0_4166_DFB114F9EDE4, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_9951A362_8D91_1A9F_41B9_90F5FDD73A0E, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"30%","propagateClick":false,"height":"30%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"cursor":"hand"},{"id":"effect_9E16B835_8D91_36E5_41D9_3B8966F19732","duration":500,"class":"FadeInEffect"},{"id":"effect_9951A362_8D91_1A9F_41B9_90F5FDD73A0E","duration":500,"class":"FadeOutEffect"},{"id":"effect_994B012A_8D97_76EC_41E0_AF45071F8190","duration":500,"class":"FadeOutEffect"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_83CC206A_8D93_376F_41E0_F1FCB70D275F"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_8332006A_8D93_376F_41C8_A91B2A691085"},{"id":"PanoramaPlayListItem_805DEDBC_8E2E_74B0_41B4_514B1EADD628","class":"PanoramaPlayListItem","camera":"this.panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_camera","media":"this.panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_805D3DBD_8E2E_74B0_4166_DFB114F9EDE4","class":"PanoramaPlayListItem","camera":"this.panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_camera","media":"this.panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"id":"PanoramaPlayListItem_805D7DBD_8E2E_74B0_41D6_B588DF0CD0AB","class":"PanoramaPlayListItem","camera":"this.panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_camera","media":"this.panorama_83D8383A_8D93_16EC_41CD_75E66254BF33","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"id":"audiores_981CF10F_8E71_16A5_41D9_2DEE89C3C086","class":"AudioResource","mp3Url":trans('audiores_981CF10F_8E71_16A5_41D9_2DEE89C3C086.mp3Url')},{"areas":["this.HotspotPanoramaOverlayArea_9FA0AD39_8D91_0EED_41E0_1A6FD71C4485"],"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":12.39,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":21.52,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside"}],"id":"overlay_9E500C31_8D91_0EFD_41E0_BFFE23ADAE8A","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"hasAudio":false,"width":1280,"class":"VideoResource","levels":["this.videolevel_801A6BB4_8E2E_7CB0_418F_0132E21A1B7B"],"height":720,"id":"videores_9D74196C_8DF7_096B_41A8_183E001CC581"},{"areas":["this.HotspotPanoramaOverlayArea_9FAA40E7_8D91_F764_41E0_BE1D3F494206"],"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":16.19,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":7.13,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside"}],"id":"overlay_9E7E9FE1_8D91_099C_41D5_38E227B371C2","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"hasAudio":false,"width":1920,"class":"VideoResource","levels":["this.videolevel_801AAB86_8E2E_7D53_41C6_4428C64B4A82"],"height":1080,"id":"videores_8267E8BF_8D93_37E5_41C1_D6A617E82967"},{"areas":["this.HotspotPanoramaOverlayArea_9F41E8A4_8D9F_179B_4195_5D22F64BE1E7"],"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","roll":2.64,"distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":13.43,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":-13.53,"vfov":8.3,"hfov":11.31,"scaleMode":"fit_inside"}],"id":"overlay_9E81D767_8D9F_1965_41E0_674B8E4A886E","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_8332706B_8D93_376D_41C3_867E205604C2"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9FA0AD39_8D91_0EED_41E0_1A6FD71C4485","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9E0A0480_8D91_1F9C_41D8_33EEB08B5D14, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)"},{"levels":[{"height":168,"class":"ImageResourceLevel","url":"media/res_988E7D77_8D97_0965_41C8_9D78C48C77CE_0.png","width":168}],"id":"res_988E7D77_8D97_0965_41C8_9D78C48C77CE","class":"ImageResource"},{"url":trans('videolevel_801A6BB4_8E2E_7CB0_418F_0132E21A1B7B.url'),"width":1280,"class":"VideoResourceLevel","type":"video/mp4","framerate":59.94,"height":720,"id":"videolevel_801A6BB4_8E2E_7CB0_418F_0132E21A1B7B","posterURL":trans('videolevel_801A6BB4_8E2E_7CB0_418F_0132E21A1B7B.posterURL'),"bitrate":4143},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9FAA40E7_8D91_F764_41E0_BE1D3F494206","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9E16B835_8D91_36E5_41D9_3B8966F19732, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)"},{"url":trans('videolevel_801AAB86_8E2E_7D53_41C6_4428C64B4A82.url'),"width":1920,"class":"VideoResourceLevel","type":"video/mp4","framerate":59.94,"height":1080,"id":"videolevel_801AAB86_8E2E_7D53_41C6_4428C64B4A82","posterURL":trans('videolevel_801AAB86_8E2E_7D53_41C6_4428C64B4A82.posterURL'),"bitrate":9321},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9F41E8A4_8D9F_179B_4195_5D22F64BE1E7","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9942C46E_8D91_1F64_41D6_1245D2AC4E0D, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)"}],"scrollBarMargin":2,"scripts":{"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"showWindow":TDV.Tour.Script.showWindow,"initQuiz":TDV.Tour.Script.initQuiz,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"init":TDV.Tour.Script.init,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"registerKey":TDV.Tour.Script.registerKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setLocale":TDV.Tour.Script.setLocale,"downloadFile":TDV.Tour.Script.downloadFile,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"startMeasurement":TDV.Tour.Script.startMeasurement,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"translate":TDV.Tour.Script.translate,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setValue":TDV.Tour.Script.setValue,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizFinish":TDV.Tour.Script.quizFinish,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getKey":TDV.Tour.Script.getKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openLink":TDV.Tour.Script.openLink,"existsKey":TDV.Tour.Script.existsKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoBack":TDV.Tour.Script.historyGoBack,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"createTween":TDV.Tour.Script.createTween},"gap":10,"watermark":false,"buttonToggleMute":"this.IconButton_8313DA00_8E2E_3F50_41B6_FFBCA38DB678","propagateClick":false,"height":"100%","backgroundColorRatios":[0],"width":"100%","layout":"absolute","scrollBarColor":"#000000"};
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
//Generated with v2022.2.18, Sat Aug 9 2025