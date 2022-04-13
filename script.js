(function(){
    var script = {
 "start": "this.init()",
 "downloadEnabled": false,
 "data": {
  "name": "Player3732"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "class": "ImageResource",
 "id": "ImageResource_18166781_1736_41D4_4197_1697931B3E4A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18080B99_1736_41F4_41A6_161546E1F611_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18080B99_1736_41F4_41A6_161546E1F611_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18080B99_1736_41F4_41A6_161546E1F611_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18080B99_1736_41F4_41A6_161546E1F611_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_18080B99_1736_41F4_41A6_161546E1F611_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "audio": "this.audioresource_19864DE3_14EC_5B0E_419A_C057204A3118",
 "data": {
  "label": "merdunya-suara-kicauan-burung-di-alam-liar (mp3cut.net)"
 },
 "class": "PanoramaAudio",
 "id": "audio_19463EE2_14EF_D90E_4184_89F2A7135FCB",
 "autoplay": true
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.92,
  "pitch": 0
 },
 "id": "camera_07E2B64D_1732_436D_41A9_5073EEC9410D"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1990FA74_1731_C33C_419C_E0E90435BD33",
 "yaw": 19.13,
 "popupDistance": 100,
 "hfov": 3.15,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1990FA74_1731_C33C_419C_E0E90435BD33_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 6.95,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.77,
  "pitch": 0
 },
 "id": "camera_074B758E_1732_41EF_41A3_BB41A3315166"
},
{
 "automaticRotationSpeed": 10,
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 1,
 "class": "RotationalCamera",
 "initialPosition": {
  "class": "RotationalCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 120
 },
 "id": "media_03155F31_1734_A4AD_418D_F6ACB6A85CCC_camera",
 "manualRotationSpeed": 1800
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "thumbnailUrl": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_t.jpg",
 "partial": false,
 "audios": [
  "this.audio_19DC788F_14D4_D915_41A8_A4CEAF596397"
 ],
 "class": "Panorama",
 "label": "PANO_20220317_150507_2",
 "id": "panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068",
   "backwardYaw": -178.23,
   "yaw": 87.34,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90",
   "backwardYaw": 3.67,
   "yaw": -96.81,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_04FB5B86_14FC_5F16_41AE_3EBB67A42B67",
  "this.overlay_1B3657CD_14F4_5715_41A6_F0DA5D84CC14",
  "this.panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.97,
  "pitch": 0
 },
 "id": "camera_075F4573_1732_4135_41B0_FF723CCEFD33"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.19,
  "pitch": 0
 },
 "id": "camera_07855614_1732_42FC_41AF_73CDF0A09580"
},
{
 "class": "ImageResource",
 "id": "ImageResource_031953F5_1775_A395_41B1_372969EA5948",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02376280_1774_5C6B_419B_E08E1497BC6C_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02376280_1774_5C6B_419B_E08E1497BC6C_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02376280_1774_5C6B_419B_E08E1497BC6C_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02376280_1774_5C6B_419B_E08E1497BC6C_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02376280_1774_5C6B_419B_E08E1497BC6C_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer"
},
{
 "class": "ImageResource",
 "id": "ImageResource_031A83F7_1775_A395_41A2_511EDD9B97E4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020739E4_1777_EFAB_419A_DA0128FDC490_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020739E4_1777_EFAB_419A_DA0128FDC490_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020739E4_1777_EFAB_419A_DA0128FDC490_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020739E4_1777_EFAB_419A_DA0128FDC490_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020739E4_1777_EFAB_419A_DA0128FDC490_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_031983F3_1775_A3AD_41B7_08DF3D1D899E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0203A5B3_177C_67AC_419F_4EA64497A7D6_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0203A5B3_177C_67AC_419F_4EA64497A7D6_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0203A5B3_177C_67AC_419F_4EA64497A7D6_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0203A5B3_177C_67AC_419F_4EA64497A7D6_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0203A5B3_177C_67AC_419F_4EA64497A7D6_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0252042D_177C_A4B5_419D_35E7F823EB46",
 "yaw": -72.85,
 "popupDistance": 100,
 "hfov": 4.6,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0252042D_177C_A4B5_419D_35E7F823EB46_0_3.jpg",
    "width": 1024,
    "height": 577
   }
  ]
 },
 "pitch": 11.07,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_020739E4_1777_EFAB_419A_DA0128FDC490",
 "yaw": 164.98,
 "popupDistance": 100,
 "hfov": 3.15,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_020739E4_1777_EFAB_419A_DA0128FDC490_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 6.95,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0203A5B3_177C_67AC_419F_4EA64497A7D6",
 "yaw": -24.8,
 "popupDistance": 100,
 "hfov": 3.16,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0203A5B3_177C_67AC_419F_4EA64497A7D6_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 5.92,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_031913F0_1775_A3AB_41AC_1D0347B15F06",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0252042D_177C_A4B5_419D_35E7F823EB46_0_0.jpg",
   "width": 4624,
   "height": 2608
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0252042D_177C_A4B5_419D_35E7F823EB46_0_1.jpg",
   "width": 4096,
   "height": 2310
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0252042D_177C_A4B5_419D_35E7F823EB46_0_2.jpg",
   "width": 2048,
   "height": 1155
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0252042D_177C_A4B5_419D_35E7F823EB46_0_3.jpg",
   "width": 1024,
   "height": 577
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0252042D_177C_A4B5_419D_35E7F823EB46_0_4.jpg",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "audio": "this.audioresource_19864DE3_14EC_5B0E_419A_C057204A3118",
 "data": {
  "label": "Audio1"
 },
 "class": "PanoramaAudio",
 "id": "audio_19DC788F_14D4_D915_41A8_A4CEAF596397",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_18080B99_1736_41F4_41A6_161546E1F611",
 "yaw": -176.49,
 "popupDistance": 100,
 "hfov": 3.17,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_18080B99_1736_41F4_41A6_161546E1F611_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": -0.6,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_031A93F1_1775_A3AD_41A9_F986C727825A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02113B45_177D_ECF4_41B5_B547C7F52552_0_0.jpg",
   "width": 4624,
   "height": 2608
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02113B45_177D_ECF4_41B5_B547C7F52552_0_1.jpg",
   "width": 4096,
   "height": 2310
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02113B45_177D_ECF4_41B5_B547C7F52552_0_2.jpg",
   "width": 2048,
   "height": 1155
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02113B45_177D_ECF4_41B5_B547C7F52552_0_3.jpg",
   "width": 1024,
   "height": 577
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02113B45_177D_ECF4_41B5_B547C7F52552_0_4.jpg",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_031A23F9_1775_A39D_41B0_1C38D0EB9559",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02555246_1774_BCF7_418C_C5B4AABD95A4_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02555246_1774_BCF7_418C_C5B4AABD95A4_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02555246_1774_BCF7_418C_C5B4AABD95A4_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02555246_1774_BCF7_418C_C5B4AABD95A4_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_02555246_1774_BCF7_418C_C5B4AABD95A4_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_02555246_1774_BCF7_418C_C5B4AABD95A4",
 "yaw": 173.22,
 "popupDistance": 100,
 "hfov": 3.15,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_02555246_1774_BCF7_418C_C5B4AABD95A4_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 7.29,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.03,
  "pitch": 0
 },
 "id": "camera_07A7D5E1_1732_4154_41AB_55476CDBA2BC"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0202E4E9_1775_A5BD_417D_17028514EFBA",
 "yaw": -177.54,
 "popupDistance": 100,
 "hfov": 3.15,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0202E4E9_1775_A5BD_417D_17028514EFBA_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 6.61,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.66,
  "pitch": 0
 },
 "id": "camera_079775FC_1732_412C_4190_D42CB2EE7791"
},
{
 "audio": "this.audioresource_19864DE3_14EC_5B0E_419A_C057204A3118",
 "data": {
  "label": "merdunya-suara-kicauan-burung-di-alam-liar (mp3cut.net)"
 },
 "class": "PanoramaAudio",
 "id": "audio_1AE3AFA1_14EF_D70D_41B4_347528478477",
 "autoplay": true
},
{
 "thumbnailUrl": "media/album_02210EA7_1754_A5B4_419F_E207B81B500B_0_t.jpg",
 "duration": 5000,
 "label": "IMG20220317154520",
 "id": "album_02210EA7_1754_A5B4_419F_E207B81B500B_0",
 "width": 2608,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_02210EA7_1754_A5B4_419F_E207B81B500B_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4624
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69",
 "yaw": -94.81,
 "popupDistance": 100,
 "hfov": 4.59,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69_0_3.jpg",
    "width": 1024,
    "height": 577
   }
  ]
 },
 "pitch": 11.41,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_02113B45_177D_ECF4_41B5_B547C7F52552",
 "yaw": -48.14,
 "popupDistance": 100,
 "hfov": 4.63,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_02113B45_177D_ECF4_41B5_B547C7F52552_0_3.jpg",
    "width": 1024,
    "height": 577
   }
  ]
 },
 "pitch": 9.01,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_camera"
},
{
 "audio": "this.audioresource_19864DE3_14EC_5B0E_419A_C057204A3118",
 "data": {
  "label": "merdunya-suara-kicauan-burung-di-alam-liar (mp3cut.net)"
 },
 "class": "PanoramaAudio",
 "id": "audio_191E9D81_14EF_FB0A_41A0_8BEB049E7C49",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C",
 "yaw": -35.1,
 "popupDistance": 100,
 "hfov": 4.65,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C_0_3.jpg",
    "width": 1024,
    "height": 577
   }
  ]
 },
 "pitch": 6.95,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_FCDB5B58_F36E_A542_41B5_42655277B682",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCDB5B58_F36E_A542_41B5_42655277B682_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_camera"
  },
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.video_191A4D2D_16EF_E4B5_41B3_4D2F530BE701",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.media_03155F31_1734_A4AD_418D_F6ACB6A85CCC",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem",
   "camera": "this.media_03155F31_1734_A4AD_418D_F6ACB6A85CCC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "media": "this.album_02210EA7_1754_A5B4_419F_E207B81B500B",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "audio": "this.audioresource_19864DE3_14EC_5B0E_419A_C057204A3118",
 "data": {
  "label": "merdunya-suara-kicauan-burung-di-alam-liar (mp3cut.net)"
 },
 "class": "PanoramaAudio",
 "id": "audio_193E51C3_14EC_4B0D_41A2_67D0B6EB7931",
 "autoplay": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_02376280_1774_5C6B_419B_E08E1497BC6C",
 "yaw": -7.64,
 "popupDistance": 100,
 "hfov": 3.15,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_02376280_1774_5C6B_419B_E08E1497BC6C_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 6.61,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/media_03155F31_1734_A4AD_418D_F6ACB6A85CCC_t.jpg",
 "class": "Video360",
 "label": "VID20220317154257_Trim",
 "id": "media_03155F31_1734_A4AD_418D_F6ACB6A85CCC",
 "loop": false,
 "vfov": 180,
 "hfovMax": 140,
 "pitch": 0,
 "hfovMin": 60,
 "hfov": 360,
 "partial": false,
 "video": [
  {
   "width": 1080,
   "type": "video/mp4",
   "posterURL": "media/media_03155F31_1734_A4AD_418D_F6ACB6A85CCC_poster.jpg",
   "bitrate": 4665,
   "class": "Video360Resource",
   "framerate": 30,
   "url": "media/media_03155F31_1734_A4AD_418D_F6ACB6A85CCC.mp4",
   "height": 1920
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_031A23F2_1775_A3AF_41B6_02EC0FA5FE0B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C_0_0.jpg",
   "width": 4624,
   "height": 2608
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C_0_1.jpg",
   "width": 4096,
   "height": 2310
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C_0_2.jpg",
   "width": 2048,
   "height": 1155
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C_0_3.jpg",
   "width": 1024,
   "height": 577
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C_0_4.jpg",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323",
 "yaw": -114.72,
 "popupDistance": 100,
 "hfov": 3.11,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 11.41,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_t.jpg",
 "partial": false,
 "audios": [
  "this.audio_193E51C3_14EC_4B0D_41A2_67D0B6EB7931"
 ],
 "class": "Panorama",
 "label": "PANO_20220317_154844_2",
 "id": "panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCDB5B58_F36E_A542_41B5_42655277B682",
   "backwardYaw": -4.08,
   "yaw": -144.03,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_tcap0",
  "this.overlay_037E3E60_172C_64AB_41A5_74F26F71BE5C",
  "this.overlay_04CA1CD5_175C_6594_41A4_C805AC037F1A",
  "this.overlay_00069CF9_1754_659D_41AB_4A82AC7ACB5D",
  "this.overlay_03DB92B1_1755_DDAD_41B5_22C32AE96A64",
  "this.overlay_023094EC_1754_65B4_41A0_B4E5B4F60E49",
  "this.overlay_012B019E_1754_DF94_41AA_47DF2831FE47",
  "this.overlay_03BFD368_1757_BCBB_41AD_63EB4DFD8A4B",
  "this.overlay_04C9378C_1754_E47B_4190_826853B11F83",
  "this.overlay_03AA3C1A_1754_649C_419D_C0545EED0FD4",
  "this.overlay_020F6E3C_1755_A49B_41B6_A00EEB5C07D8",
  "this.overlay_04F4816E_1754_5CB7_415C_B2D52D838E2B",
  "this.overlay_03F342F2_1754_FDAF_417A_5359EBA36BD0",
  "this.overlay_038FEC0D_176C_6474_41A4_C45011701C67",
  "this.overlay_03DE3A24_176D_ACB4_41B2_56159921B997",
  "this.popup_020739E4_1777_EFAB_419A_DA0128FDC490",
  "this.popup_02555246_1774_BCF7_418C_C5B4AABD95A4",
  "this.popup_0202E4E9_1775_A5BD_417D_17028514EFBA",
  "this.popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323",
  "this.popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69",
  "this.popup_0252042D_177C_A4B5_419D_35E7F823EB46",
  "this.popup_02113B45_177D_ECF4_41B5_B547C7F52552",
  "this.popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C",
  "this.popup_0203A5B3_177C_67AC_419F_4EA64497A7D6",
  "this.popup_02376280_1774_5C6B_419B_E08E1497BC6C",
  "this.popup_1990FA74_1731_C33C_419C_E0E90435BD33",
  "this.popup_186A73B6_1732_413F_41B3_92CC48EFE9DA",
  "this.popup_1823853E_1732_C12C_4196_55162CF09EF0",
  "this.overlay_18C1B704_1731_C2DC_4192_D960E3897DD8",
  "this.popup_18080B99_1736_41F4_41A6_161546E1F611"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FCDB5B58_F36E_A542_41B5_42655277B682_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_0319E3ED_1775_A3B5_419B_494DF3B4F245",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_t.jpg",
 "partial": false,
 "audios": [
  "this.audio_19863DE3_14EC_5B0E_4198_B9306243C464"
 ],
 "class": "Panorama",
 "label": "PANO_20220317_145931_1",
 "id": "panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7",
   "backwardYaw": 87.34,
   "yaw": -178.23,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 120,
 "overlays": [
  "this.overlay_1A4A57F2_14F4_770F_4176_EA310F0AF389",
  "this.panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.51,
  "pitch": 0
 },
 "id": "camera_07F4A632_1732_4337_41B7_2EA6DEF0DCF7"
},
{
 "class": "ImageResource",
 "id": "ImageResource_18AAD00F_1733_BEED_41B5_6A5FBA82BBA1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1990FA74_1731_C33C_419C_E0E90435BD33_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1990FA74_1731_C33C_419C_E0E90435BD33_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1990FA74_1731_C33C_419C_E0E90435BD33_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1990FA74_1731_C33C_419C_E0E90435BD33_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1990FA74_1731_C33C_419C_E0E90435BD33_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_t.jpg",
 "partial": false,
 "audios": [
  "this.audio_191E9D81_14EF_FB0A_41A0_8BEB049E7C49"
 ],
 "class": "Panorama",
 "label": "PANO_20220317_151636_4",
 "id": "panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90",
   "backwardYaw": 78.08,
   "yaw": -4.49,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCDB5B58_F36E_A542_41B5_42655277B682",
   "backwardYaw": -50.97,
   "yaw": 99.08,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_18E47022_16D7_BCAC_41B2_DBF02732656B",
  "this.overlay_18551096_16DC_5D94_41AF_E7CB68376E5F",
  "this.panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "audio": "this.audioresource_19864DE3_14EC_5B0E_419A_C057204A3118",
 "data": {
  "label": "merdunya-suara-kicauan-burung-di-alam-liar (mp3cut.net)"
 },
 "class": "PanoramaAudio",
 "id": "audio_19863DE3_14EC_5B0E_4198_B9306243C464",
 "autoplay": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_18ADF011_1733_BEF5_4198_536DD69C249F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_186A73B6_1732_413F_41B3_92CC48EFE9DA_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_186A73B6_1732_413F_41B3_92CC48EFE9DA_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_186A73B6_1732_413F_41B3_92CC48EFE9DA_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_186A73B6_1732_413F_41B3_92CC48EFE9DA_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_186A73B6_1732_413F_41B3_92CC48EFE9DA_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/album_02210EA7_1754_A5B4_419F_E207B81B500B_t.png",
 "playList": "this.album_02210EA7_1754_A5B4_419F_E207B81B500B_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG20220317154520",
 "id": "album_02210EA7_1754_A5B4_419F_E207B81B500B"
},
{
 "thumbnailUrl": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_t.jpg",
 "partial": false,
 "audios": [
  "this.audio_19463EE2_14EF_D90E_4184_89F2A7135FCB"
 ],
 "class": "Panorama",
 "label": "PANO_20220317_151020_3",
 "id": "panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7",
   "backwardYaw": -96.81,
   "yaw": 3.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9",
   "backwardYaw": -4.49,
   "yaw": 78.08,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_04504361_14EC_4F0D_4172_804AB1D25F31",
  "this.overlay_0429DF57_14D3_B735_41AC_580D4345710A",
  "this.panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/video_191A4D2D_16EF_E4B5_41B3_4D2F530BE701_t.jpg",
 "class": "Video",
 "label": "VID20220317154257_Trim",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_191A4D2D_16EF_E4B5_41B3_4D2F530BE701",
 "height": 1920,
 "video": {
  "class": "VideoResource",
  "mp4Url": "media/video_191A4D2D_16EF_E4B5_41B3_4D2F530BE701.mp4",
  "width": 1080,
  "height": 1920
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_031953EF_1775_A3B5_41B1_72CAD06F36FD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69_0_0.jpg",
   "width": 4624,
   "height": 2608
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69_0_1.jpg",
   "width": 4096,
   "height": 2310
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69_0_2.jpg",
   "width": 2048,
   "height": 1155
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69_0_3.jpg",
   "width": 1024,
   "height": 577
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69_0_4.jpg",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_186A73B6_1732_413F_41B3_92CC48EFE9DA",
 "yaw": 28.39,
 "popupDistance": 100,
 "hfov": 3.13,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_186A73B6_1732_413F_41B3_92CC48EFE9DA_0_3.jpg",
    "width": 577,
    "height": 1024
   }
  ]
 },
 "pitch": 9.35,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_t.jpg",
 "partial": false,
 "audios": [
  "this.audio_1AE3AFA1_14EF_D70D_41B4_347528478477"
 ],
 "class": "Panorama",
 "label": "PANO_20220317_153443_1",
 "id": "panorama_FCDB5B58_F36E_A542_41B5_42655277B682",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9",
   "backwardYaw": 99.08,
   "yaw": -50.97,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83",
   "backwardYaw": -144.03,
   "yaw": -4.08,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_19EE57F9_16DC_A39D_4196_C6C14AE6C080",
  "this.panorama_FCDB5B58_F36E_A542_41B5_42655277B682_tcap0",
  "this.overlay_035A227E_1733_BC94_41B0_D75D0A2689D4"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "ImageResource",
 "id": "ImageResource_1812E779_1736_4134_41AA_BB6D14F26190",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1823853E_1732_C12C_4196_55162CF09EF0_0_0.jpg",
   "width": 4624,
   "height": 2608
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1823853E_1732_C12C_4196_55162CF09EF0_0_1.jpg",
   "width": 4096,
   "height": 2310
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1823853E_1732_C12C_4196_55162CF09EF0_0_2.jpg",
   "width": 2048,
   "height": 1155
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1823853E_1732_C12C_4196_55162CF09EF0_0_3.jpg",
   "width": 1024,
   "height": 577
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_1823853E_1732_C12C_4196_55162CF09EF0_0_4.jpg",
   "width": 512,
   "height": 288
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_031AE3F6_1775_A397_41AC_5BBB3E744B92",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0202E4E9_1775_A5BD_417D_17028514EFBA_0_0.jpg",
   "width": 2608,
   "height": 4624
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0202E4E9_1775_A5BD_417D_17028514EFBA_0_1.jpg",
   "width": 2310,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0202E4E9_1775_A5BD_417D_17028514EFBA_0_2.jpg",
   "width": 1155,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0202E4E9_1775_A5BD_417D_17028514EFBA_0_3.jpg",
   "width": 577,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_0202E4E9_1775_A5BD_417D_17028514EFBA_0_4.jpg",
   "width": 288,
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.33,
  "pitch": 0
 },
 "id": "camera_07BA25A9_1732_41D4_41A9_649D6494E081"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_1823853E_1732_C12C_4196_55162CF09EF0",
 "yaw": 44.52,
 "popupDistance": 100,
 "hfov": 4.66,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_1823853E_1732_C12C_4196_55162CF09EF0_0_3.jpg",
    "width": 1024,
    "height": 577
   }
  ]
 },
 "pitch": 6.26,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.92,
  "pitch": 0
 },
 "id": "camera_0764E558_1732_4173_41A0_302EB29A1BC9"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.92,
  "pitch": 0
 },
 "id": "camera_07A9B5C2_1732_4154_41B5_D1C148E88DDA"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent5386"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "ZoomImage5387"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton5388"
 },
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "minHeight": 0,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadow": false,
 "paddingBottom": 5,
 "borderRadius": 0,
 "right": 10,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontStyle": "normal",
 "rollOverIconColor": "#666666",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "fontWeight": "normal",
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "class": "CloseButton",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "class": "AudioResource",
 "mp3Url": "media/audio_19DC788F_14D4_D915_41A8_A4CEAF596397.mp3",
 "id": "audioresource_19864DE3_14EC_5B0E_419A_C057204A3118",
 "oggUrl": "media/audio_19DC788F_14D4_D915_41A8_A4CEAF596397.ogg"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068, this.camera_074B758E_1732_41EF_41A3_BB41A3315166); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1B789D42_14F4_5B0F_41AD_6FD574D6437B",
   "pitch": -14.27,
   "yaw": 87.34,
   "hfov": 8.52,
   "distance": 100
  }
 ],
 "id": "overlay_04FB5B86_14FC_5F16_41AE_3EBB67A42B67",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -14.27,
   "hfov": 8.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90, this.camera_07BA25A9_1732_41D4_41A9_649D6494E081); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1B10ADDC_14F4_FB3A_41B0_880579B85BC9",
   "pitch": -17.64,
   "yaw": -96.81,
   "hfov": 8.38,
   "distance": 100
  }
 ],
 "id": "overlay_1B3657CD_14F4_5715_41A6_F0DA5D84CC14",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -17.64,
   "hfov": 8.38
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 30
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FCDB5B58_F36E_A542_41B5_42655277B682, this.camera_07E2B64D_1732_436D_41A9_5073EEC9410D); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0365A2B9_172C_7D9D_4174_5A9C939D7E14",
   "pitch": -7.27,
   "yaw": -144.03,
   "hfov": 8.72,
   "distance": 50
  }
 ],
 "id": "overlay_037E3E60_172C_64AB_41A5_74F26F71BE5C",
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -7.27,
   "hfov": 8.72
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0214EDC7_1774_A7F4_41A9_1A7849BD4323, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_0319E3ED_1775_A3B5_419B_494DF3B4F245, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -114.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.59,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_3_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 11.41
  }
 ],
 "id": "overlay_04CA1CD5_175C_6594_41A4_C805AC037F1A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 11.41,
   "hfov": 4.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_020A4DD2_1773_A7EC_41B2_5EDD15994E69, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031953EF_1775_A3B5_41B1_72CAD06F36FD, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -94.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.59,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_4_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 11.41
  }
 ],
 "id": "overlay_00069CF9_1754_659D_41AB_4A82AC7ACB5D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 11.41,
   "hfov": 4.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0252042D_177C_A4B5_419D_35E7F823EB46, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031913F0_1775_A3AB_41AC_1D0347B15F06, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -72.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.6,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_6_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 11.07
  }
 ],
 "id": "overlay_03DB92B1_1755_DDAD_41B5_22C32AE96A64",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 11.07,
   "hfov": 4.6
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_02113B45_177D_ECF4_41B5_B547C7F52552, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031A93F1_1775_A3AD_41A9_F986C727825A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -48.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.63,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_7_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 9.01
  }
 ],
 "id": "overlay_023094EC_1754_65B4_41A0_B4E5B4F60E49",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 9.01,
   "hfov": 4.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_021FB6F0_177C_E5AB_4196_9D1DF316E69C, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031A23F2_1775_A3AF_41B6_02EC0FA5FE0B, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -35.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.65,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_8_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 6.95
  }
 ],
 "id": "overlay_012B019E_1754_DF94_41AA_47DF2831FE47",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 6.95,
   "hfov": 4.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0203A5B3_177C_67AC_419F_4EA64497A7D6, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031983F3_1775_A3AD_41B7_08DF3D1D899E, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -24.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.66,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_9_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 5.92
  }
 ],
 "id": "overlay_03BFD368_1757_BCBB_41AD_63EB4DFD8A4B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 5.92,
   "hfov": 4.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_02376280_1774_5C6B_419B_E08E1497BC6C, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031953F5_1775_A395_41B1_372969EA5948, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.66,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_10_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 6.61
  }
 ],
 "id": "overlay_04C9378C_1754_E47B_4190_826853B11F83",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 6.61,
   "hfov": 4.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1990FA74_1731_C33C_419C_E0E90435BD33, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_18AAD00F_1733_BEED_41B5_6A5FBA82BBA1, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 19.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.65,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_11_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 6.95
  }
 ],
 "id": "overlay_03AA3C1A_1754_649C_419D_C0545EED0FD4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 6.95,
   "hfov": 4.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_186A73B6_1732_413F_41B3_92CC48EFE9DA, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_18ADF011_1733_BEF5_4198_536DD69C249F, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 28.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.63,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_12_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 9.35
  }
 ],
 "id": "overlay_020F6E3C_1755_A49B_41B6_A00EEB5C07D8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 9.35,
   "hfov": 4.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1823853E_1732_C12C_4196_55162CF09EF0, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_1812E779_1736_4134_41AA_BB6D14F26190, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 44.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.66,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_15_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 6.26
  }
 ],
 "id": "overlay_04F4816E_1754_5CB7_415C_B2D52D838E2B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_15_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 6.26,
   "hfov": 4.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_0202E4E9_1775_A5BD_417D_17028514EFBA, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031AE3F6_1775_A397_41AC_5BBB3E744B92, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -177.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.66,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_16_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 6.61
  }
 ],
 "id": "overlay_03F342F2_1754_FDAF_417A_5359EBA36BD0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_16_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 6.61,
   "hfov": 4.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_020739E4_1777_EFAB_419A_DA0128FDC490, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031A83F7_1775_A395_41A2_511EDD9B97E4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 164.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.65,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_17_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 6.95
  }
 ],
 "id": "overlay_038FEC0D_176C_6474_41A4_C45011701C67",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_17_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 6.95,
   "hfov": 4.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_02555246_1774_BCF7_418C_C5B4AABD95A4, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_031A23F9_1775_A39D_41B0_1C38D0EB9559, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 173.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.65,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_19_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": 7.29
  }
 ],
 "id": "overlay_03DE3A24_176D_ACB4_41B2_56159921B997",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_19_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 7.29,
   "hfov": 4.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_18080B99_1736_41F4_41A6_161546E1F611, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_18166781_1736_41D4_4197_1697931B3E4A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -176.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.69,
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_20_0.png",
      "width": 80,
      "height": 96
     }
    ]
   },
   "pitch": -0.6
  }
 ],
 "id": "overlay_18C1B704_1731_C2DC_4192_D960E3897DD8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_20_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -0.6,
   "hfov": 4.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7, this.camera_079775FC_1732_412C_4190_D42CB2EE7791); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1B5D43EF_14F7_CF15_4198_46B065F989DE",
   "pitch": -18.74,
   "yaw": -178.23,
   "hfov": 8.32,
   "distance": 100
  }
 ],
 "id": "overlay_1A4A57F2_14F4_770F_4176_EA310F0AF389",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -18.74,
   "hfov": 8.32
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90, this.camera_07A9B5C2_1732_4154_41B5_D1C148E88DDA); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0730FBAD_16DC_A3B4_41B2_71749450F817",
   "pitch": -19.56,
   "yaw": -4.49,
   "hfov": 8.28,
   "distance": 100
  }
 ],
 "id": "overlay_18E47022_16D7_BCAC_41B2_DBF02732656B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -19.56,
   "hfov": 8.28
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FCDB5B58_F36E_A542_41B5_42655277B682, this.camera_07A7D5E1_1732_4154_41AB_55476CDBA2BC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07309BAE_16DC_A3B4_41AE_1FCADA331205",
   "pitch": -20.45,
   "yaw": 99.08,
   "hfov": 8.24,
   "distance": 100
  }
 ],
 "id": "overlay_18551096_16DC_5D94_41AF_E7CB68376E5F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -20.45,
   "hfov": 8.24
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 30
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_02210EA7_1754_A5B4_419F_E207B81B500B_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.56",
     "zoomFactor": 1.1,
     "y": "0.49"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_02210EA7_1754_A5B4_419F_E207B81B500B_AlbumPlayList"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7, this.camera_07855614_1732_42FC_41AF_73CDF0A09580); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1B14EFE1_14EC_B70D_419D_E8AC5E7E2CE1",
   "pitch": -22.51,
   "yaw": 3.67,
   "hfov": 8.12,
   "distance": 100
  }
 ],
 "id": "overlay_04504361_14EC_4F0D_4172_804AB1D25F31",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -22.51,
   "hfov": 8.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9, this.camera_07F4A632_1732_4337_41B7_2EA6DEF0DCF7); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04E211A6_14D5_CB16_4194_A61C265B59AD",
   "pitch": -21.96,
   "yaw": 78.08,
   "hfov": 8.15,
   "distance": 100
  }
 ],
 "id": "overlay_0429DF57_14D3_B735_41AC_580D4345710A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -21.96,
   "hfov": 8.15
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9, this.camera_0764E558_1732_4173_41A0_302EB29A1BC9); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_06D352A7_16DC_5DB4_41A0_E60AEA41CC59",
   "pitch": -23.32,
   "yaw": -50.97,
   "hfov": 8.56,
   "distance": 100
  }
 ],
 "id": "overlay_19EE57F9_16DC_A39D_4196_C6C14AE6C080",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -23.32,
   "hfov": 8.56
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_FCDB5B58_F36E_A542_41B5_42655277B682_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_tcap0.png",
    "width": 850,
    "height": 850
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83, this.camera_075F4573_1732_4135_41B0_FF723CCEFD33); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04BC16C1_1734_65ED_41A3_492C6F329A4F",
   "pitch": -15.1,
   "yaw": -4.08,
   "hfov": 8.49,
   "distance": 50
  }
 ],
 "id": "overlay_035A227E_1733_BC94_41B0_D75D0A2689D4",
 "data": {
  "label": "Circle Arrow 03a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.1,
   "hfov": 8.49
  }
 ]
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0_HS_0_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B789D42_14F4_5B0F_41AD_6FD574D6437B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCD9307F_F36E_A33D_41E4_F5987B2F92C7_0_HS_1_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B10ADDC_14F4_FB3A_41B0_880579B85BC9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC01445E_F36E_E37F_41E8_6D3BAC084B83_0_HS_0_0.png",
   "width": 1220,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0365A2B9_172C_7D9D_4174_5A9C939D7E14",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E3E2C782_F371_6DC6_41AB_88A8FDA1F068_0_HS_0_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B5D43EF_14F7_CF15_4198_46B065F989DE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0_HS_0_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0730FBAD_16DC_A3B4_41B2_71749450F817",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FC2C424D_F36E_A75D_41E5_DC582CB216D9_0_HS_1_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07309BAE_16DC_A3B4_41AE_1FCADA331205",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0_HS_0_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B14EFE1_14EC_B70D_419D_E8AC5E7E2CE1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCDEE97F_F36E_A53D_41D3_AE79528F2B90_0_HS_1_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04E211A6_14D5_CB16_4194_A61C265B59AD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0_HS_1_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_06D352A7_16DC_5DB4_41A0_E60AEA41CC59",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_FCDB5B58_F36E_A542_41B5_42655277B682_0_HS_4_0.png",
   "width": 1220,
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04BC16C1_1734_65ED_41A3_492C6F329A4F",
 "frameDuration": 41
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
