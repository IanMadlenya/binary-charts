import { nowAsEpoch } from 'binary-utils';

export default [
    { epoch: 0, quote: 50 },
    { epoch: 1, quote: 40 },
    { epoch: 2, quote: 60 },
    { epoch: 3, quote: 20 },
    { epoch: 4, quote: 40 },
    { epoch: 5, quote: 30 },
    { epoch: 6, quote: 60 },
    { epoch: 7, quote: 30 },
    { epoch: 8, quote: 40 },
    { epoch: 9, quote: 40 },
    { epoch: 10, quote: 50 },
    { epoch: 11, quote: 20 },
    { epoch: 12, quote: 40 },
].map((x, i) => {
    x.epoch = nowAsEpoch() - ((12 - i) * 60);
    return x;
});

export const massiveTicks = [
    {
        epoch: 1465871888,
        quote: 36377.39
    },
    {
        epoch: 1465871890,
        quote: 36378.36
    },
    {
        epoch: 1465871892,
        quote: 36387.37
    },
    {
        epoch: 1465871894,
        quote: 36379.5
    },
    {
        epoch: 1465871896,
        quote: 36367.73
    },
    {
        epoch: 1465871898,
        quote: 36375.82
    },
    {
        epoch: 1465871900,
        quote: 36383.13
    },
    {
        epoch: 1465871902,
        quote: 36384.34
    },
    {
        epoch: 1465871904,
        quote: 36367.51
    },
    {
        epoch: 1465871906,
        quote: 36365.41
    },
    {
        epoch: 1465871908,
        quote: 36365.49
    },
    {
        epoch: 1465871910,
        quote: 36366.21
    },
    {
        epoch: 1465871912,
        quote: 36377.85
    },
    {
        epoch: 1465871914,
        quote: 36376.71
    },
    {
        epoch: 1465871916,
        quote: 36369.57
    },
    {
        epoch: 1465871918,
        quote: 36372.31
    },
    {
        epoch: 1465871920,
        quote: 36374.92
    },
    {
        epoch: 1465871922,
        quote: 36367.2
    },
    {
        epoch: 1465871924,
        quote: 36360.37
    },
    {
        epoch: 1465871926,
        quote: 36365.34
    },
    {
        epoch: 1465871928,
        quote: 36380.4
    },
    {
        epoch: 1465871930,
        quote: 36382.93
    },
    {
        epoch: 1465871932,
        quote: 36379.04
    },
    {
        epoch: 1465871934,
        quote: 36398.61
    },
    {
        epoch: 1465871936,
        quote: 36403.4
    },
    {
        epoch: 1465871938,
        quote: 36383.15
    },
    {
        epoch: 1465871940,
        quote: 36394.37
    },
    {
        epoch: 1465871942,
        quote: 36398.44
    },
    {
        epoch: 1465871944,
        quote: 36400.9
    },
    {
        epoch: 1465871946,
        quote: 36404.09
    },
    {
        epoch: 1465871948,
        quote: 36410.41
    },
    {
        epoch: 1465871950,
        quote: 36386.06
    },
    {
        epoch: 1465871952,
        quote: 36378.89
    },
    {
        epoch: 1465871954,
        quote: 36381.77
    },
    {
        epoch: 1465871956,
        quote: 36369
    },
    {
        epoch: 1465871958,
        quote: 36359.57
    },
    {
        epoch: 1465871960,
        quote: 36356.5
    },
    {
        epoch: 1465871962,
        quote: 36357.97
    },
    {
        epoch: 1465871964,
        quote: 36355.96
    },
    {
        epoch: 1465871966,
        quote: 36366.27
    },
    {
        epoch: 1465871968,
        quote: 36364.37
    },
    {
        epoch: 1465871970,
        quote: 36365
    },
    {
        epoch: 1465871972,
        quote: 36352.07
    },
    {
        epoch: 1465871974,
        quote: 36358.76
    },
    {
        epoch: 1465871976,
        quote: 36356.63
    },
    {
        epoch: 1465871978,
        quote: 36335.67
    },
    {
        epoch: 1465871980,
        quote: 36334.68
    },
    {
        epoch: 1465871982,
        quote: 36333.97
    },
    {
        epoch: 1465871984,
        quote: 36334.63
    },
    {
        epoch: 1465871986,
        quote: 36339.86
    },
    {
        epoch: 1465871988,
        quote: 36341.12
    },
    {
        epoch: 1465871990,
        quote: 36345.58
    },
    {
        epoch: 1465871992,
        quote: 36338.08
    },
    {
        epoch: 1465871994,
        quote: 36353.15
    },
    {
        epoch: 1465871996,
        quote: 36356.11
    },
    {
        epoch: 1465871998,
        quote: 36367.12
    },
    {
        epoch: 1465872000,
        quote: 36358.25
    },
    {
        epoch: 1465872002,
        quote: 36342.67
    },
    {
        epoch: 1465872004,
        quote: 36338.96
    },
    {
        epoch: 1465872006,
        quote: 36342.28
    },
    {
        epoch: 1465872008,
        quote: 36337.78
    },
    {
        epoch: 1465872010,
        quote: 36323.46
    },
    {
        epoch: 1465872012,
        quote: 36319.47
    },
    {
        epoch: 1465872014,
        quote: 36312.57
    },
    {
        epoch: 1465872016,
        quote: 36315.15
    },
    {
        epoch: 1465872018,
        quote: 36312.99
    },
    {
        epoch: 1465872020,
        quote: 36292.82
    },
    {
        epoch: 1465872022,
        quote: 36288.42
    },
    {
        epoch: 1465872024,
        quote: 36290.4
    },
    {
        epoch: 1465872026,
        quote: 36284.45
    },
    {
        epoch: 1465872028,
        quote: 36287.58
    },
    {
        epoch: 1465872030,
        quote: 36296.13
    },
    {
        epoch: 1465872032,
        quote: 36282.75
    },
    {
        epoch: 1465872034,
        quote: 36286.01
    },
    {
        epoch: 1465872036,
        quote: 36279.15
    },
    {
        epoch: 1465872038,
        quote: 36288.61
    },
    {
        epoch: 1465872040,
        quote: 36294.33
    },
    {
        epoch: 1465872042,
        quote: 36303.19
    },
    {
        epoch: 1465872044,
        quote: 36289.15
    },
    {
        epoch: 1465872046,
        quote: 36282.82
    },
    {
        epoch: 1465872048,
        quote: 36297.31
    },
    {
        epoch: 1465872050,
        quote: 36305.41
    },
    {
        epoch: 1465872052,
        quote: 36311.51
    },
    {
        epoch: 1465872054,
        quote: 36311.82
    },
    {
        epoch: 1465872056,
        quote: 36308.01
    },
    {
        epoch: 1465872058,
        quote: 36303.24
    },
    {
        epoch: 1465872060,
        quote: 36300.83
    },
    {
        epoch: 1465872062,
        quote: 36290.24
    },
    {
        epoch: 1465872064,
        quote: 36297.82
    },
    {
        epoch: 1465872066,
        quote: 36311.06
    },
    {
        epoch: 1465872068,
        quote: 36312.75
    },
    {
        epoch: 1465872070,
        quote: 36325.18
    },
    {
        epoch: 1465872072,
        quote: 36321.99
    },
    {
        epoch: 1465872074,
        quote: 36340.11
    },
    {
        epoch: 1465872076,
        quote: 36347.63
    },
    {
        epoch: 1465872078,
        quote: 36336.84
    },
    {
        epoch: 1465872080,
        quote: 36330.59
    },
    {
        epoch: 1465872082,
        quote: 36339.66
    },
    {
        epoch: 1465872084,
        quote: 36346.89
    },
    {
        epoch: 1465872086,
        quote: 36339.78
    },
    {
        epoch: 1465872088,
        quote: 36332.86
    },
    {
        epoch: 1465872090,
        quote: 36332.73
    },
    {
        epoch: 1465872092,
        quote: 36344.25
    },
    {
        epoch: 1465872094,
        quote: 36354.03
    },
    {
        epoch: 1465872096,
        quote: 36354.75
    },
    {
        epoch: 1465872098,
        quote: 36347.46
    },
    {
        epoch: 1465872100,
        quote: 36332.99
    },
    {
        epoch: 1465872102,
        quote: 36316.95
    },
    {
        epoch: 1465872104,
        quote: 36307.84
    },
    {
        epoch: 1465872106,
        quote: 36309.61
    },
    {
        epoch: 1465872108,
        quote: 36323.03
    },
    {
        epoch: 1465872110,
        quote: 36325.98
    },
    {
        epoch: 1465872112,
        quote: 36326.57
    },
    {
        epoch: 1465872114,
        quote: 36311.02
    },
    {
        epoch: 1465872116,
        quote: 36287.01
    },
    {
        epoch: 1465872118,
        quote: 36281.04
    },
    {
        epoch: 1465872120,
        quote: 36289.11
    },
    {
        epoch: 1465872122,
        quote: 36275.96
    },
    {
        epoch: 1465872124,
        quote: 36273.13
    },
    {
        epoch: 1465872126,
        quote: 36267.27
    },
    {
        epoch: 1465872128,
        quote: 36261.17
    },
    {
        epoch: 1465872130,
        quote: 36267.23
    },
    {
        epoch: 1465872132,
        quote: 36258.59
    },
    {
        epoch: 1465872134,
        quote: 36273.26
    },
    {
        epoch: 1465872136,
        quote: 36276.01
    },
    {
        epoch: 1465872138,
        quote: 36287.54
    },
    {
        epoch: 1465872140,
        quote: 36300.32
    },
    {
        epoch: 1465872142,
        quote: 36295.76
    },
    {
        epoch: 1465872144,
        quote: 36304.42
    },
    {
        epoch: 1465872146,
        quote: 36292.95
    },
    {
        epoch: 1465872148,
        quote: 36297.68
    },
    {
        epoch: 1465872150,
        quote: 36288.27
    },
    {
        epoch: 1465872152,
        quote: 36284.22
    },
    {
        epoch: 1465872154,
        quote: 36274.81
    },
    {
        epoch: 1465872156,
        quote: 36274.05
    },
    {
        epoch: 1465872158,
        quote: 36282.29
    },
    {
        epoch: 1465872160,
        quote: 36290.59
    },
    {
        epoch: 1465872162,
        quote: 36283.3
    },
    {
        epoch: 1465872164,
        quote: 36289.3
    },
    {
        epoch: 1465872166,
        quote: 36287.52
    },
    {
        epoch: 1465872168,
        quote: 36290.95
    },
    {
        epoch: 1465872170,
        quote: 36297.07
    },
    {
        epoch: 1465872172,
        quote: 36292.46
    },
    {
        epoch: 1465872174,
        quote: 36286.64
    },
    {
        epoch: 1465872176,
        quote: 36290.46
    },
    {
        epoch: 1465872178,
        quote: 36289.77
    },
    {
        epoch: 1465872180,
        quote: 36293.83
    },
    {
        epoch: 1465872182,
        quote: 36296.68
    },
    {
        epoch: 1465872184,
        quote: 36297.48
    },
    {
        epoch: 1465872186,
        quote: 36295.62
    },
    {
        epoch: 1465872188,
        quote: 36292.85
    },
    {
        epoch: 1465872190,
        quote: 36285.81
    },
    {
        epoch: 1465872192,
        quote: 36286.53
    },
    {
        epoch: 1465872194,
        quote: 36286.23
    },
    {
        epoch: 1465872196,
        quote: 36281.69
    },
    {
        epoch: 1465872198,
        quote: 36280.04
    },
    {
        epoch: 1465872200,
        quote: 36289.04
    },
    {
        epoch: 1465872202,
        quote: 36276.98
    },
    {
        epoch: 1465872204,
        quote: 36268.73
    },
    {
        epoch: 1465872206,
        quote: 36249.43
    },
    {
        epoch: 1465872208,
        quote: 36249.39
    },
    {
        epoch: 1465872210,
        quote: 36251.89
    },
    {
        epoch: 1465872212,
        quote: 36240.01
    },
    {
        epoch: 1465872214,
        quote: 36241.27
    },
    {
        epoch: 1465872216,
        quote: 36251.06
    },
    {
        epoch: 1465872218,
        quote: 36251.12
    },
    {
        epoch: 1465872220,
        quote: 36253.37
    },
    {
        epoch: 1465872222,
        quote: 36255.47
    },
    {
        epoch: 1465872224,
        quote: 36247.42
    },
    {
        epoch: 1465872226,
        quote: 36248.13
    },
    {
        epoch: 1465872228,
        quote: 36241.3
    },
    {
        epoch: 1465872230,
        quote: 36260.19
    },
    {
        epoch: 1465872232,
        quote: 36268.52
    },
    {
        epoch: 1465872234,
        quote: 36267.11
    },
    {
        epoch: 1465872236,
        quote: 36261.43
    },
    {
        epoch: 1465872238,
        quote: 36255.05
    },
    {
        epoch: 1465872240,
        quote: 36263.19
    },
    {
        epoch: 1465872242,
        quote: 36276.83
    },
    {
        epoch: 1465872244,
        quote: 36293.83
    },
    {
        epoch: 1465872246,
        quote: 36296.64
    },
    {
        epoch: 1465872248,
        quote: 36285.82
    },
    {
        epoch: 1465872250,
        quote: 36305.46
    },
    {
        epoch: 1465872252,
        quote: 36311.92
    },
    {
        epoch: 1465872254,
        quote: 36318.09
    },
    {
        epoch: 1465872256,
        quote: 36317.3
    },
    {
        epoch: 1465872258,
        quote: 36319.62
    },
    {
        epoch: 1465872260,
        quote: 36329.66
    },
    {
        epoch: 1465872262,
        quote: 36319.57
    },
    {
        epoch: 1465872264,
        quote: 36330.54
    },
    {
        epoch: 1465872266,
        quote: 36334.51
    },
    {
        epoch: 1465872268,
        quote: 36329.19
    },
    {
        epoch: 1465872270,
        quote: 36326.4
    },
    {
        epoch: 1465872272,
        quote: 36299.73
    },
    {
        epoch: 1465872274,
        quote: 36309.08
    },
    {
        epoch: 1465872276,
        quote: 36302.71
    },
    {
        epoch: 1465872278,
        quote: 36307.18
    },
    {
        epoch: 1465872280,
        quote: 36298.19
    },
    {
        epoch: 1465872282,
        quote: 36308.24
    },
    {
        epoch: 1465872284,
        quote: 36293.71
    },
    {
        epoch: 1465872286,
        quote: 36291.75
    },
    {
        epoch: 1465872288,
        quote: 36286.71
    },
    {
        epoch: 1465872290,
        quote: 36291.72
    },
    {
        epoch: 1465872292,
        quote: 36277.52
    },
    {
        epoch: 1465872294,
        quote: 36278.97
    },
    {
        epoch: 1465872296,
        quote: 36287.22
    },
    {
        epoch: 1465872298,
        quote: 36285.84
    },
    {
        epoch: 1465872300,
        quote: 36302.61
    },
    {
        epoch: 1465872302,
        quote: 36305.51
    },
    {
        epoch: 1465872304,
        quote: 36310.42
    },
    {
        epoch: 1465872306,
        quote: 36316.7
    },
    {
        epoch: 1465872308,
        quote: 36329.83
    },
    {
        epoch: 1465872310,
        quote: 36326.27
    },
    {
        epoch: 1465872312,
        quote: 36318.89
    },
    {
        epoch: 1465872314,
        quote: 36326.81
    },
    {
        epoch: 1465872316,
        quote: 36333.91
    },
    {
        epoch: 1465872318,
        quote: 36328.24
    },
    {
        epoch: 1465872320,
        quote: 36327.25
    },
    {
        epoch: 1465872322,
        quote: 36319
    },
    {
        epoch: 1465872324,
        quote: 36308.97
    },
    {
        epoch: 1465872326,
        quote: 36326.25
    },
    {
        epoch: 1465872328,
        quote: 36313.87
    },
    {
        epoch: 1465872330,
        quote: 36313.38
    },
    {
        epoch: 1465872332,
        quote: 36310.08
    },
    {
        epoch: 1465872334,
        quote: 36304.39
    },
    {
        epoch: 1465872336,
        quote: 36312.77
    },
    {
        epoch: 1465872338,
        quote: 36317.63
    },
    {
        epoch: 1465872340,
        quote: 36318.14
    },
    {
        epoch: 1465872342,
        quote: 36307.48
    },
    {
        epoch: 1465872344,
        quote: 36287.79
    },
    {
        epoch: 1465872346,
        quote: 36281.4
    },
    {
        epoch: 1465872348,
        quote: 36284.65
    },
    {
        epoch: 1465872350,
        quote: 36279.4
    },
    {
        epoch: 1465872352,
        quote: 36295.71
    },
    {
        epoch: 1465872354,
        quote: 36295.91
    },
    {
        epoch: 1465872356,
        quote: 36302.37
    },
    {
        epoch: 1465872358,
        quote: 36284.28
    },
    {
        epoch: 1465872360,
        quote: 36295.94
    },
    {
        epoch: 1465872362,
        quote: 36284.84
    },
    {
        epoch: 1465872364,
        quote: 36285.64
    },
    {
        epoch: 1465872366,
        quote: 36279.77
    },
    {
        epoch: 1465872368,
        quote: 36278.54
    },
    {
        epoch: 1465872370,
        quote: 36270.29
    },
    {
        epoch: 1465872372,
        quote: 36266.14
    },
    {
        epoch: 1465872374,
        quote: 36276.97
    },
    {
        epoch: 1465872376,
        quote: 36273.1
    },
    {
        epoch: 1465872378,
        quote: 36265.56
    },
    {
        epoch: 1465872380,
        quote: 36258.04
    },
    {
        epoch: 1465872382,
        quote: 36253.01
    },
    {
        epoch: 1465872384,
        quote: 36261.34
    },
    {
        epoch: 1465872386,
        quote: 36262.99
    },
    {
        epoch: 1465872388,
        quote: 36254.3
    },
    {
        epoch: 1465872390,
        quote: 36247.65
    },
    {
        epoch: 1465872392,
        quote: 36254.07
    },
    {
        epoch: 1465872394,
        quote: 36259.47
    },
    {
        epoch: 1465872396,
        quote: 36248.63
    },
    {
        epoch: 1465872398,
        quote: 36256.31
    },
    {
        epoch: 1465872400,
        quote: 36254.57
    },
    {
        epoch: 1465872402,
        quote: 36252.06
    },
    {
        epoch: 1465872404,
        quote: 36275.04
    },
    {
        epoch: 1465872406,
        quote: 36269.93
    },
    {
        epoch: 1465872408,
        quote: 36284.33
    },
    {
        epoch: 1465872410,
        quote: 36276.58
    },
    {
        epoch: 1465872412,
        quote: 36275.48
    },
    {
        epoch: 1465872414,
        quote: 36273.55
    },
    {
        epoch: 1465872416,
        quote: 36284.63
    },
    {
        epoch: 1465872418,
        quote: 36275.55
    },
    {
        epoch: 1465872420,
        quote: 36279.21
    },
    {
        epoch: 1465872422,
        quote: 36274.23
    },
    {
        epoch: 1465872424,
        quote: 36277.58
    },
    {
        epoch: 1465872426,
        quote: 36280.19
    },
    {
        epoch: 1465872428,
        quote: 36276.47
    },
    {
        epoch: 1465872430,
        quote: 36270.57
    },
    {
        epoch: 1465872432,
        quote: 36263.72
    },
    {
        epoch: 1465872434,
        quote: 36275.45
    },
    {
        epoch: 1465872436,
        quote: 36276.04
    },
    {
        epoch: 1465872438,
        quote: 36279.31
    },
    {
        epoch: 1465872440,
        quote: 36275.18
    },
    {
        epoch: 1465872442,
        quote: 36265.27
    },
    {
        epoch: 1465872444,
        quote: 36254
    },
    {
        epoch: 1465872446,
        quote: 36265.97
    },
    {
        epoch: 1465872448,
        quote: 36266.26
    },
    {
        epoch: 1465872450,
        quote: 36278.74
    },
    {
        epoch: 1465872452,
        quote: 36273.77
    },
    {
        epoch: 1465872454,
        quote: 36281.61
    },
    {
        epoch: 1465872456,
        quote: 36278.52
    },
    {
        epoch: 1465872458,
        quote: 36271.87
    },
    {
        epoch: 1465872460,
        quote: 36279.82
    },
    {
        epoch: 1465872462,
        quote: 36292.83
    },
    {
        epoch: 1465872464,
        quote: 36288.49
    },
    {
        epoch: 1465872466,
        quote: 36281.8
    },
    {
        epoch: 1465872468,
        quote: 36290.96
    },
    {
        epoch: 1465872470,
        quote: 36295.93
    },
    {
        epoch: 1465872472,
        quote: 36280.56
    },
    {
        epoch: 1465872474,
        quote: 36294.42
    },
    {
        epoch: 1465872476,
        quote: 36296.06
    },
    {
        epoch: 1465872478,
        quote: 36291.82
    },
    {
        epoch: 1465872480,
        quote: 36285.53
    },
    {
        epoch: 1465872482,
        quote: 36283.29
    },
    {
        epoch: 1465872484,
        quote: 36294.02
    },
    {
        epoch: 1465872486,
        quote: 36311.25
    },
    {
        epoch: 1465872488,
        quote: 36299.92
    },
    {
        epoch: 1465872490,
        quote: 36303.8
    },
    {
        epoch: 1465872492,
        quote: 36309.5
    },
    {
        epoch: 1465872494,
        quote: 36295.73
    },
    {
        epoch: 1465872496,
        quote: 36291.67
    },
    {
        epoch: 1465872498,
        quote: 36280.83
    },
    {
        epoch: 1465872500,
        quote: 36286.63
    },
    {
        epoch: 1465872502,
        quote: 36279.96
    },
    {
        epoch: 1465872504,
        quote: 36272.41
    },
    {
        epoch: 1465872506,
        quote: 36267.17
    },
    {
        epoch: 1465872508,
        quote: 36265.87
    },
    {
        epoch: 1465872510,
        quote: 36262.3
    },
    {
        epoch: 1465872512,
        quote: 36271.34
    },
    {
        epoch: 1465872514,
        quote: 36270.22
    },
    {
        epoch: 1465872516,
        quote: 36294.82
    },
    {
        epoch: 1465872518,
        quote: 36311.62
    },
    {
        epoch: 1465872520,
        quote: 36316.37
    },
    {
        epoch: 1465872522,
        quote: 36311.88
    },
    {
        epoch: 1465872524,
        quote: 36301.12
    },
    {
        epoch: 1465872526,
        quote: 36300.63
    },
    {
        epoch: 1465872528,
        quote: 36300.14
    },
    {
        epoch: 1465872530,
        quote: 36291.91
    },
    {
        epoch: 1465872532,
        quote: 36297.55
    },
    {
        epoch: 1465872534,
        quote: 36296.54
    },
    {
        epoch: 1465872536,
        quote: 36301.56
    },
    {
        epoch: 1465872538,
        quote: 36299.68
    },
    {
        epoch: 1465872540,
        quote: 36317.95
    },
    {
        epoch: 1465872542,
        quote: 36321.44
    },
    {
        epoch: 1465872544,
        quote: 36313.92
    },
    {
        epoch: 1465872546,
        quote: 36293.31
    },
    {
        epoch: 1465872548,
        quote: 36283.7
    },
    {
        epoch: 1465872550,
        quote: 36277.76
    },
    {
        epoch: 1465872552,
        quote: 36282.63
    },
    {
        epoch: 1465872554,
        quote: 36276.22
    },
    {
        epoch: 1465872556,
        quote: 36278.56
    },
    {
        epoch: 1465872558,
        quote: 36307.08
    },
    {
        epoch: 1465872560,
        quote: 36305.13
    },
    {
        epoch: 1465872562,
        quote: 36309.13
    },
    {
        epoch: 1465872564,
        quote: 36304.94
    },
    {
        epoch: 1465872566,
        quote: 36311.61
    },
    {
        epoch: 1465872568,
        quote: 36310.42
    },
    {
        epoch: 1465872570,
        quote: 36324.46
    },
    {
        epoch: 1465872572,
        quote: 36308.51
    },
    {
        epoch: 1465872574,
        quote: 36311.85
    },
    {
        epoch: 1465872576,
        quote: 36324.26
    },
    {
        epoch: 1465872578,
        quote: 36329.72
    },
    {
        epoch: 1465872580,
        quote: 36329.53
    },
    {
        epoch: 1465872582,
        quote: 36325.92
    },
    {
        epoch: 1465872584,
        quote: 36323.65
    },
    {
        epoch: 1465872586,
        quote: 36320.07
    },
    {
        epoch: 1465872588,
        quote: 36303.86
    },
    {
        epoch: 1465872590,
        quote: 36316.65
    },
    {
        epoch: 1465872592,
        quote: 36325.27
    },
    {
        epoch: 1465872594,
        quote: 36339.69
    },
    {
        epoch: 1465872596,
        quote: 36343.87
    },
    {
        epoch: 1465872598,
        quote: 36344.14
    },
    {
        epoch: 1465872600,
        quote: 36343.93
    },
    {
        epoch: 1465872602,
        quote: 36349.36
    },
    {
        epoch: 1465872604,
        quote: 36348.48
    },
    {
        epoch: 1465872606,
        quote: 36350.13
    },
    {
        epoch: 1465872608,
        quote: 36354.64
    },
    {
        epoch: 1465872610,
        quote: 36357.73
    },
    {
        epoch: 1465872612,
        quote: 36362.71
    },
    {
        epoch: 1465872614,
        quote: 36363.95
    },
    {
        epoch: 1465872616,
        quote: 36356.24
    },
    {
        epoch: 1465872618,
        quote: 36369.85
    },
    {
        epoch: 1465872620,
        quote: 36362.42
    },
    {
        epoch: 1465872622,
        quote: 36357.36
    },
    {
        epoch: 1465872624,
        quote: 36344.67
    },
    {
        epoch: 1465872626,
        quote: 36336.11
    },
    {
        epoch: 1465872628,
        quote: 36345.17
    },
    {
        epoch: 1465872630,
        quote: 36336.84
    },
    {
        epoch: 1465872632,
        quote: 36333.62
    },
    {
        epoch: 1465872634,
        quote: 36335.35
    },
    {
        epoch: 1465872636,
        quote: 36341.8
    },
    {
        epoch: 1465872638,
        quote: 36331.79
    },
    {
        epoch: 1465872640,
        quote: 36339.19
    },
    {
        epoch: 1465872642,
        quote: 36346.75
    },
    {
        epoch: 1465872644,
        quote: 36348.45
    },
    {
        epoch: 1465872646,
        quote: 36352.46
    },
    {
        epoch: 1465872648,
        quote: 36365.07
    },
    {
        epoch: 1465872650,
        quote: 36372.51
    },
    {
        epoch: 1465872652,
        quote: 36382.1
    },
    {
        epoch: 1465872654,
        quote: 36394.42
    },
    {
        epoch: 1465872656,
        quote: 36412.22
    },
    {
        epoch: 1465872658,
        quote: 36427.41
    },
    {
        epoch: 1465872660,
        quote: 36423.62
    },
    {
        epoch: 1465872662,
        quote: 36429.95
    },
    {
        epoch: 1465872664,
        quote: 36431.12
    },
    {
        epoch: 1465872666,
        quote: 36403.97
    },
    {
        epoch: 1465872668,
        quote: 36423.17
    },
    {
        epoch: 1465872670,
        quote: 36427.48
    },
    {
        epoch: 1465872672,
        quote: 36422.16
    },
    {
        epoch: 1465872674,
        quote: 36405.23
    },
    {
        epoch: 1465872676,
        quote: 36408.41
    },
    {
        epoch: 1465872678,
        quote: 36400.69
    },
    {
        epoch: 1465872680,
        quote: 36396.07
    },
    {
        epoch: 1465872682,
        quote: 36406.84
    },
    {
        epoch: 1465872684,
        quote: 36404.39
    },
    {
        epoch: 1465872686,
        quote: 36420.83
    },
    {
        epoch: 1465872688,
        quote: 36426.08
    },
    {
        epoch: 1465872690,
        quote: 36417.45
    },
    {
        epoch: 1465872692,
        quote: 36420.95
    },
    {
        epoch: 1465872694,
        quote: 36409.56
    },
    {
        epoch: 1465872696,
        quote: 36415.3
    },
    {
        epoch: 1465872698,
        quote: 36403.08
    },
    {
        epoch: 1465872700,
        quote: 36405.25
    },
    {
        epoch: 1465872702,
        quote: 36408.14
    },
    {
        epoch: 1465872704,
        quote: 36407.53
    },
    {
        epoch: 1465872706,
        quote: 36404.19
    },
    {
        epoch: 1465872708,
        quote: 36401.98
    },
    {
        epoch: 1465872710,
        quote: 36401.58
    },
    {
        epoch: 1465872712,
        quote: 36400.86
    },
    {
        epoch: 1465872714,
        quote: 36402.28
    },
    {
        epoch: 1465872716,
        quote: 36397.54
    },
    {
        epoch: 1465872718,
        quote: 36406.01
    },
    {
        epoch: 1465872720,
        quote: 36424
    },
    {
        epoch: 1465872722,
        quote: 36412.42
    },
    {
        epoch: 1465872724,
        quote: 36405.64
    },
    {
        epoch: 1465872726,
        quote: 36414.19
    },
    {
        epoch: 1465872728,
        quote: 36415.63
    },
    {
        epoch: 1465872730,
        quote: 36404.45
    },
    {
        epoch: 1465872732,
        quote: 36407.39
    },
    {
        epoch: 1465872734,
        quote: 36405.57
    },
    {
        epoch: 1465872736,
        quote: 36422.49
    },
    {
        epoch: 1465872738,
        quote: 36429.02
    },
    {
        epoch: 1465872740,
        quote: 36425.58
    },
    {
        epoch: 1465872742,
        quote: 36427.33
    },
    {
        epoch: 1465872744,
        quote: 36444.53
    },
    {
        epoch: 1465872746,
        quote: 36456.37
    },
    {
        epoch: 1465872748,
        quote: 36460.69
    },
    {
        epoch: 1465872750,
        quote: 36464.61
    },
    {
        epoch: 1465872752,
        quote: 36466.3
    },
    {
        epoch: 1465872754,
        quote: 36458.48
    },
    {
        epoch: 1465872756,
        quote: 36456.97
    },
    {
        epoch: 1465872758,
        quote: 36473.97
    },
    {
        epoch: 1465872760,
        quote: 36466.68
    },
    {
        epoch: 1465872762,
        quote: 36476.2
    },
    {
        epoch: 1465872764,
        quote: 36455.42
    },
    {
        epoch: 1465872766,
        quote: 36446.1
    },
    {
        epoch: 1465872768,
        quote: 36460.5
    },
    {
        epoch: 1465872770,
        quote: 36462
    },
    {
        epoch: 1465872772,
        quote: 36459.77
    },
    {
        epoch: 1465872774,
        quote: 36444.45
    },
    {
        epoch: 1465872776,
        quote: 36431.72
    },
    {
        epoch: 1465872778,
        quote: 36418.44
    },
    {
        epoch: 1465872780,
        quote: 36428.59
    },
    {
        epoch: 1465872782,
        quote: 36430.1
    },
    {
        epoch: 1465872784,
        quote: 36421.99
    },
    {
        epoch: 1465872786,
        quote: 36417.37
    },
    {
        epoch: 1465872788,
        quote: 36417.47
    },
    {
        epoch: 1465872790,
        quote: 36403.35
    },
    {
        epoch: 1465872792,
        quote: 36405.78
    },
    {
        epoch: 1465872794,
        quote: 36404.88
    },
    {
        epoch: 1465872796,
        quote: 36391.59
    },
    {
        epoch: 1465872798,
        quote: 36390.97
    },
    {
        epoch: 1465872800,
        quote: 36385.32
    },
    {
        epoch: 1465872802,
        quote: 36402.41
    },
    {
        epoch: 1465872804,
        quote: 36396.14
    },
    {
        epoch: 1465872806,
        quote: 36406.07
    },
    {
        epoch: 1465872808,
        quote: 36409.13
    },
    {
        epoch: 1465872810,
        quote: 36402.6
    },
    {
        epoch: 1465872812,
        quote: 36408.58
    },
    {
        epoch: 1465872814,
        quote: 36408.85
    },
    {
        epoch: 1465872816,
        quote: 36405.61
    },
    {
        epoch: 1465872818,
        quote: 36407.55
    },
    {
        epoch: 1465872820,
        quote: 36401.19
    },
    {
        epoch: 1465872822,
        quote: 36411.01
    },
    {
        epoch: 1465872824,
        quote: 36422.82
    },
    {
        epoch: 1465872826,
        quote: 36425.62
    },
    {
        epoch: 1465872828,
        quote: 36425.88
    },
    {
        epoch: 1465872830,
        quote: 36427.05
    },
    {
        epoch: 1465872832,
        quote: 36428.94
    },
    {
        epoch: 1465872834,
        quote: 36422.51
    },
    {
        epoch: 1465872836,
        quote: 36430.7
    },
    {
        epoch: 1465872838,
        quote: 36416.23
    },
    {
        epoch: 1465872840,
        quote: 36420.24
    },
    {
        epoch: 1465872842,
        quote: 36423.23
    },
    {
        epoch: 1465872844,
        quote: 36429.82
    },
    {
        epoch: 1465872846,
        quote: 36443.47
    },
    {
        epoch: 1465872848,
        quote: 36440.16
    },
    {
        epoch: 1465872850,
        quote: 36440.86
    },
    {
        epoch: 1465872852,
        quote: 36442.38
    },
    {
        epoch: 1465872854,
        quote: 36443.54
    },
    {
        epoch: 1465872856,
        quote: 36432.05
    },
    {
        epoch: 1465872858,
        quote: 36415.74
    },
    {
        epoch: 1465872860,
        quote: 36418.88
    },
    {
        epoch: 1465872862,
        quote: 36402.84
    },
    {
        epoch: 1465872864,
        quote: 36414.25
    },
    {
        epoch: 1465872866,
        quote: 36415.88
    },
    {
        epoch: 1465872868,
        quote: 36427.28
    },
    {
        epoch: 1465872870,
        quote: 36445.61
    },
    {
        epoch: 1465872872,
        quote: 36445.63
    },
    {
        epoch: 1465872874,
        quote: 36452.28
    },
    {
        epoch: 1465872876,
        quote: 36437.31
    },
    {
        epoch: 1465872878,
        quote: 36425.88
    },
    {
        epoch: 1465872880,
        quote: 36424.86
    },
    {
        epoch: 1465872882,
        quote: 36415.69
    },
    {
        epoch: 1465872884,
        quote: 36421.26
    },
    {
        epoch: 1465872886,
        quote: 36404.07
    },
    {
        epoch: 1465872888,
        quote: 36414.08
    },
    {
        epoch: 1465872890,
        quote: 36410.39
    },
    {
        epoch: 1465872892,
        quote: 36413.93
    },
    {
        epoch: 1465872894,
        quote: 36409.96
    },
    {
        epoch: 1465872896,
        quote: 36408.37
    },
    {
        epoch: 1465872898,
        quote: 36411.33
    },
    {
        epoch: 1465872900,
        quote: 36424.85
    },
    {
        epoch: 1465872902,
        quote: 36413.51
    },
    {
        epoch: 1465872904,
        quote: 36426.97
    },
    {
        epoch: 1465872906,
        quote: 36430.98
    },
    {
        epoch: 1465872908,
        quote: 36436.86
    },
    {
        epoch: 1465872910,
        quote: 36447.07
    },
    {
        epoch: 1465872912,
        quote: 36440.92
    },
    {
        epoch: 1465872914,
        quote: 36424.93
    },
    {
        epoch: 1465872916,
        quote: 36424.14
    },
    {
        epoch: 1465872918,
        quote: 36427.43
    },
    {
        epoch: 1465872920,
        quote: 36422.9
    },
    {
        epoch: 1465872922,
        quote: 36418.77
    },
    {
        epoch: 1465872924,
        quote: 36424.4
    },
    {
        epoch: 1465872926,
        quote: 36431.74
    },
    {
        epoch: 1465872928,
        quote: 36428.41
    },
    {
        epoch: 1465872930,
        quote: 36423.39
    },
    {
        epoch: 1465872932,
        quote: 36421.91
    },
    {
        epoch: 1465872934,
        quote: 36425.95
    },
    {
        epoch: 1465872936,
        quote: 36435.38
    },
    {
        epoch: 1465872938,
        quote: 36425.83
    },
    {
        epoch: 1465872940,
        quote: 36442.66
    },
    {
        epoch: 1465872942,
        quote: 36444.04
    },
    {
        epoch: 1465872944,
        quote: 36454.07
    },
    {
        epoch: 1465872946,
        quote: 36462.79
    },
    {
        epoch: 1465872948,
        quote: 36468.7
    },
    {
        epoch: 1465872950,
        quote: 36464.91
    },
    {
        epoch: 1465872952,
        quote: 36467.77
    },
    {
        epoch: 1465872954,
        quote: 36458.72
    },
    {
        epoch: 1465872956,
        quote: 36463.41
    },
    {
        epoch: 1465872958,
        quote: 36452.62
    },
    {
        epoch: 1465872960,
        quote: 36445.12
    },
    {
        epoch: 1465872962,
        quote: 36441.87
    },
    {
        epoch: 1465872964,
        quote: 36444.64
    },
    {
        epoch: 1465872966,
        quote: 36440.42
    },
    {
        epoch: 1465872968,
        quote: 36427.92
    },
    {
        epoch: 1465872970,
        quote: 36429.3
    },
    {
        epoch: 1465872972,
        quote: 36405.97
    },
    {
        epoch: 1465872974,
        quote: 36390.35
    },
    {
        epoch: 1465872976,
        quote: 36374.38
    },
    {
        epoch: 1465872978,
        quote: 36395.65
    },
    {
        epoch: 1465872980,
        quote: 36397.05
    },
    {
        epoch: 1465872982,
        quote: 36377.54
    },
    {
        epoch: 1465872984,
        quote: 36378.88
    },
    {
        epoch: 1465872986,
        quote: 36375.59
    },
    {
        epoch: 1465872988,
        quote: 36377.72
    },
    {
        epoch: 1465872990,
        quote: 36381.27
    },
    {
        epoch: 1465872992,
        quote: 36391.18
    },
    {
        epoch: 1465872994,
        quote: 36391.3
    },
    {
        epoch: 1465872996,
        quote: 36392.39
    },
    {
        epoch: 1465872998,
        quote: 36402.44
    },
    {
        epoch: 1465873000,
        quote: 36410.95
    },
    {
        epoch: 1465873002,
        quote: 36409.83
    },
    {
        epoch: 1465873004,
        quote: 36401.1
    },
    {
        epoch: 1465873006,
        quote: 36392.84
    },
    {
        epoch: 1465873008,
        quote: 36391.22
    },
    {
        epoch: 1465873010,
        quote: 36387.28
    },
    {
        epoch: 1465873012,
        quote: 36406.11
    },
    {
        epoch: 1465873014,
        quote: 36425.83
    },
    {
        epoch: 1465873016,
        quote: 36433.97
    },
    {
        epoch: 1465873018,
        quote: 36432.47
    },
    {
        epoch: 1465873020,
        quote: 36432.3
    },
    {
        epoch: 1465873022,
        quote: 36435.24
    },
    {
        epoch: 1465873024,
        quote: 36440.23
    },
    {
        epoch: 1465873026,
        quote: 36449.89
    },
    {
        epoch: 1465873028,
        quote: 36456.08
    },
    {
        epoch: 1465873030,
        quote: 36456.96
    },
    {
        epoch: 1465873032,
        quote: 36457
    },
    {
        epoch: 1465873034,
        quote: 36458.23
    },
    {
        epoch: 1465873036,
        quote: 36461.51
    },
    {
        epoch: 1465873038,
        quote: 36458.04
    },
    {
        epoch: 1465873040,
        quote: 36455.28
    },
    {
        epoch: 1465873042,
        quote: 36466.88
    },
    {
        epoch: 1465873044,
        quote: 36466.1
    },
    {
        epoch: 1465873046,
        quote: 36468.99
    },
    {
        epoch: 1465873048,
        quote: 36475.6
    },
    {
        epoch: 1465873050,
        quote: 36477.16
    },
    {
        epoch: 1465873052,
        quote: 36462.92
    },
    {
        epoch: 1465873054,
        quote: 36463.32
    },
    {
        epoch: 1465873056,
        quote: 36468.42
    },
    {
        epoch: 1465873058,
        quote: 36466.39
    },
    {
        epoch: 1465873060,
        quote: 36467.17
    },
    {
        epoch: 1465873062,
        quote: 36470.08
    },
    {
        epoch: 1465873064,
        quote: 36475.81
    },
    {
        epoch: 1465873066,
        quote: 36493.96
    },
    {
        epoch: 1465873068,
        quote: 36504.38
    },
    {
        epoch: 1465873070,
        quote: 36495.22
    },
    {
        epoch: 1465873072,
        quote: 36460.19
    },
    {
        epoch: 1465873074,
        quote: 36449.26
    },
    {
        epoch: 1465873076,
        quote: 36449.5
    },
    {
        epoch: 1465873078,
        quote: 36456.05
    },
    {
        epoch: 1465873080,
        quote: 36470.74
    },
    {
        epoch: 1465873082,
        quote: 36479.03
    },
    {
        epoch: 1465873084,
        quote: 36476.16
    },
    {
        epoch: 1465873086,
        quote: 36482.65
    },
    {
        epoch: 1465873088,
        quote: 36479.11
    },
    {
        epoch: 1465873090,
        quote: 36477.19
    },
    {
        epoch: 1465873092,
        quote: 36456.41
    },
    {
        epoch: 1465873094,
        quote: 36455.17
    },
    {
        epoch: 1465873096,
        quote: 36461.07
    },
    {
        epoch: 1465873098,
        quote: 36457.22
    },
    {
        epoch: 1465873100,
        quote: 36472.72
    },
    {
        epoch: 1465873102,
        quote: 36466.3
    },
    {
        epoch: 1465873104,
        quote: 36462.32
    },
    {
        epoch: 1465873106,
        quote: 36450.44
    },
    {
        epoch: 1465873108,
        quote: 36453.19
    },
    {
        epoch: 1465873110,
        quote: 36448.69
    },
    {
        epoch: 1465873112,
        quote: 36455.5
    },
    {
        epoch: 1465873114,
        quote: 36466.96
    },
    {
        epoch: 1465873116,
        quote: 36450.38
    },
    {
        epoch: 1465873118,
        quote: 36446.11
    },
    {
        epoch: 1465873120,
        quote: 36457.82
    },
    {
        epoch: 1465873122,
        quote: 36456.72
    },
    {
        epoch: 1465873124,
        quote: 36455.51
    },
    {
        epoch: 1465873126,
        quote: 36458.79
    },
    {
        epoch: 1465873128,
        quote: 36439.82
    },
    {
        epoch: 1465873130,
        quote: 36444.12
    },
    {
        epoch: 1465873132,
        quote: 36430.84
    },
    {
        epoch: 1465873134,
        quote: 36426.11
    },
    {
        epoch: 1465873136,
        quote: 36424.11
    },
    {
        epoch: 1465873138,
        quote: 36438.38
    },
    {
        epoch: 1465873140,
        quote: 36430.01
    },
    {
        epoch: 1465873142,
        quote: 36434.38
    },
    {
        epoch: 1465873144,
        quote: 36428.13
    },
    {
        epoch: 1465873146,
        quote: 36434.27
    },
    {
        epoch: 1465873148,
        quote: 36416.85
    },
    {
        epoch: 1465873150,
        quote: 36421.75
    },
    {
        epoch: 1465873152,
        quote: 36429.72
    },
    {
        epoch: 1465873154,
        quote: 36418.65
    },
    {
        epoch: 1465873156,
        quote: 36418.83
    },
    {
        epoch: 1465873158,
        quote: 36424.21
    },
    {
        epoch: 1465873160,
        quote: 36415.5
    },
    {
        epoch: 1465873162,
        quote: 36414.48
    },
    {
        epoch: 1465873164,
        quote: 36417.46
    },
    {
        epoch: 1465873166,
        quote: 36418.51
    },
    {
        epoch: 1465873168,
        quote: 36420.67
    },
    {
        epoch: 1465873170,
        quote: 36423.84
    },
    {
        epoch: 1465873172,
        quote: 36443.77
    },
    {
        epoch: 1465873174,
        quote: 36447.65
    },
    {
        epoch: 1465873176,
        quote: 36450.56
    },
    {
        epoch: 1465873178,
        quote: 36465.25
    },
    {
        epoch: 1465873180,
        quote: 36445.98
    },
    {
        epoch: 1465873182,
        quote: 36445.99
    },
    {
        epoch: 1465873184,
        quote: 36455.73
    },
    {
        epoch: 1465873186,
        quote: 36458.5
    },
    {
        epoch: 1465873188,
        quote: 36463.66
    },
    {
        epoch: 1465873190,
        quote: 36463.84
    },
    {
        epoch: 1465873192,
        quote: 36458.23
    },
    {
        epoch: 1465873194,
        quote: 36454.27
    },
    {
        epoch: 1465873196,
        quote: 36453.06
    },
    {
        epoch: 1465873198,
        quote: 36445.63
    },
    {
        epoch: 1465873200,
        quote: 36448.74
    },
    {
        epoch: 1465873202,
        quote: 36445.53
    },
    {
        epoch: 1465873204,
        quote: 36461.77
    },
    {
        epoch: 1465873206,
        quote: 36456.27
    },
    {
        epoch: 1465873208,
        quote: 36462.47
    },
    {
        epoch: 1465873210,
        quote: 36456.73
    },
    {
        epoch: 1465873212,
        quote: 36469.1
    },
    {
        epoch: 1465873214,
        quote: 36468.01
    },
    {
        epoch: 1465873216,
        quote: 36458.91
    },
    {
        epoch: 1465873218,
        quote: 36462.29
    },
    {
        epoch: 1465873220,
        quote: 36462.61
    },
    {
        epoch: 1465873222,
        quote: 36465.46
    },
    {
        epoch: 1465873224,
        quote: 36469.98
    },
    {
        epoch: 1465873226,
        quote: 36478.31
    },
    {
        epoch: 1465873228,
        quote: 36485.38
    },
    {
        epoch: 1465873230,
        quote: 36488.16
    },
    {
        epoch: 1465873232,
        quote: 36472.26
    },
    {
        epoch: 1465873234,
        quote: 36483.93
    },
    {
        epoch: 1465873236,
        quote: 36491.97
    },
    {
        epoch: 1465873238,
        quote: 36498.23
    },
    {
        epoch: 1465873240,
        quote: 36497.4
    },
    {
        epoch: 1465873242,
        quote: 36485.03
    },
    {
        epoch: 1465873244,
        quote: 36489.63
    },
    {
        epoch: 1465873246,
        quote: 36496.05
    },
    {
        epoch: 1465873248,
        quote: 36494.86
    },
    {
        epoch: 1465873250,
        quote: 36497.47
    },
    {
        epoch: 1465873252,
        quote: 36502.29
    },
    {
        epoch: 1465873254,
        quote: 36495.69
    },
    {
        epoch: 1465873256,
        quote: 36481.1
    },
    {
        epoch: 1465873258,
        quote: 36469.7
    },
    {
        epoch: 1465873260,
        quote: 36467.05
    },
    {
        epoch: 1465873262,
        quote: 36464.34
    },
    {
        epoch: 1465873264,
        quote: 36472.35
    },
    {
        epoch: 1465873266,
        quote: 36472.59
    },
    {
        epoch: 1465873268,
        quote: 36459.13
    },
    {
        epoch: 1465873270,
        quote: 36455.97
    },
    {
        epoch: 1465873272,
        quote: 36468.16
    },
    {
        epoch: 1465873274,
        quote: 36448.59
    },
    {
        epoch: 1465873276,
        quote: 36440.73
    },
    {
        epoch: 1465873278,
        quote: 36430.65
    },
    {
        epoch: 1465873280,
        quote: 36427.77
    },
    {
        epoch: 1465873282,
        quote: 36434.86
    },
    {
        epoch: 1465873284,
        quote: 36438.17
    },
    {
        epoch: 1465873286,
        quote: 36436.46
    },
    {
        epoch: 1465873288,
        quote: 36441.23
    },
    {
        epoch: 1465873290,
        quote: 36451.17
    },
    {
        epoch: 1465873292,
        quote: 36458.15
    },
    {
        epoch: 1465873294,
        quote: 36457.09
    },
    {
        epoch: 1465873296,
        quote: 36454.16
    },
    {
        epoch: 1465873298,
        quote: 36442.14
    },
    {
        epoch: 1465873300,
        quote: 36442.3
    },
    {
        epoch: 1465873302,
        quote: 36449.47
    },
    {
        epoch: 1465873304,
        quote: 36457.06
    },
    {
        epoch: 1465873306,
        quote: 36460.02
    },
    {
        epoch: 1465873308,
        quote: 36444.74
    },
    {
        epoch: 1465873310,
        quote: 36445
    },
    {
        epoch: 1465873312,
        quote: 36444.56
    },
    {
        epoch: 1465873314,
        quote: 36437.12
    },
    {
        epoch: 1465873316,
        quote: 36415.87
    },
    {
        epoch: 1465873318,
        quote: 36412.39
    },
    {
        epoch: 1465873320,
        quote: 36409.87
    },
    {
        epoch: 1465873322,
        quote: 36409.14
    },
    {
        epoch: 1465873324,
        quote: 36411.81
    },
    {
        epoch: 1465873326,
        quote: 36423.21
    },
    {
        epoch: 1465873328,
        quote: 36418.46
    },
    {
        epoch: 1465873330,
        quote: 36420.3
    },
    {
        epoch: 1465873332,
        quote: 36408.42
    },
    {
        epoch: 1465873334,
        quote: 36415.97
    },
    {
        epoch: 1465873336,
        quote: 36414.45
    },
    {
        epoch: 1465873338,
        quote: 36397.55
    },
    {
        epoch: 1465873340,
        quote: 36407.05
    },
    {
        epoch: 1465873342,
        quote: 36415.78
    },
    {
        epoch: 1465873344,
        quote: 36403.5
    },
    {
        epoch: 1465873346,
        quote: 36393.9
    },
    {
        epoch: 1465873348,
        quote: 36381.46
    },
    {
        epoch: 1465873350,
        quote: 36387.77
    },
    {
        epoch: 1465873352,
        quote: 36383.99
    },
    {
        epoch: 1465873354,
        quote: 36372.49
    },
    {
        epoch: 1465873356,
        quote: 36381.74
    },
    {
        epoch: 1465873358,
        quote: 36377.67
    },
    {
        epoch: 1465873360,
        quote: 36373.88
    },
    {
        epoch: 1465873362,
        quote: 36378.98
    },
    {
        epoch: 1465873364,
        quote: 36361.3
    },
    {
        epoch: 1465873366,
        quote: 36355.81
    },
    {
        epoch: 1465873368,
        quote: 36361.58
    },
    {
        epoch: 1465873370,
        quote: 36345.31
    },
    {
        epoch: 1465873372,
        quote: 36358.97
    },
    {
        epoch: 1465873374,
        quote: 36349.47
    },
    {
        epoch: 1465873376,
        quote: 36349.49
    },
    {
        epoch: 1465873378,
        quote: 36348.29
    },
    {
        epoch: 1465873380,
        quote: 36345.29
    },
    {
        epoch: 1465873382,
        quote: 36328.59
    },
    {
        epoch: 1465873384,
        quote: 36318.52
    },
    {
        epoch: 1465873386,
        quote: 36305.94
    },
    {
        epoch: 1465873388,
        quote: 36304.06
    },
    {
        epoch: 1465873390,
        quote: 36316
    },
    {
        epoch: 1465873392,
        quote: 36308.47
    },
    {
        epoch: 1465873394,
        quote: 36302.87
    },
    {
        epoch: 1465873396,
        quote: 36295.03
    },
    {
        epoch: 1465873398,
        quote: 36288.38
    },
    {
        epoch: 1465873400,
        quote: 36291.01
    },
    {
        epoch: 1465873402,
        quote: 36281.88
    },
    {
        epoch: 1465873404,
        quote: 36289.86
    },
    {
        epoch: 1465873406,
        quote: 36272.93
    },
    {
        epoch: 1465873408,
        quote: 36276.94
    },
    {
        epoch: 1465873410,
        quote: 36272.2
    },
    {
        epoch: 1465873412,
        quote: 36266.83
    },
    {
        epoch: 1465873414,
        quote: 36279.96
    },
    {
        epoch: 1465873416,
        quote: 36279.55
    },
    {
        epoch: 1465873418,
        quote: 36279.65
    },
    {
        epoch: 1465873420,
        quote: 36263.35
    },
    {
        epoch: 1465873422,
        quote: 36253.71
    },
    {
        epoch: 1465873424,
        quote: 36255.31
    },
    {
        epoch: 1465873426,
        quote: 36264.66
    },
    {
        epoch: 1465873428,
        quote: 36276.16
    },
    {
        epoch: 1465873430,
        quote: 36270.67
    },
    {
        epoch: 1465873432,
        quote: 36264.66
    },
    {
        epoch: 1465873434,
        quote: 36264.94
    },
    {
        epoch: 1465873436,
        quote: 36281.09
    },
    {
        epoch: 1465873438,
        quote: 36278.57
    },
    {
        epoch: 1465873440,
        quote: 36277.43
    },
    {
        epoch: 1465873442,
        quote: 36276.16
    },
    {
        epoch: 1465873444,
        quote: 36262.91
    },
    {
        epoch: 1465873446,
        quote: 36258.4
    },
    {
        epoch: 1465873448,
        quote: 36256.47
    },
    {
        epoch: 1465873450,
        quote: 36249.11
    },
    {
        epoch: 1465873452,
        quote: 36248.5
    },
    {
        epoch: 1465873454,
        quote: 36251.2
    },
    {
        epoch: 1465873456,
        quote: 36244.18
    },
    {
        epoch: 1465873458,
        quote: 36242.07
    },
    {
        epoch: 1465873460,
        quote: 36254.58
    },
    {
        epoch: 1465873462,
        quote: 36264.06
    },
    {
        epoch: 1465873464,
        quote: 36233.83
    },
    {
        epoch: 1465873466,
        quote: 36232.99
    },
    {
        epoch: 1465873468,
        quote: 36233.74
    },
    {
        epoch: 1465873470,
        quote: 36229.01
    },
    {
        epoch: 1465873472,
        quote: 36226
    },
    {
        epoch: 1465873474,
        quote: 36227.62
    },
    {
        epoch: 1465873476,
        quote: 36225.59
    },
    {
        epoch: 1465873478,
        quote: 36205.63
    },
    {
        epoch: 1465873480,
        quote: 36226.28
    },
    {
        epoch: 1465873482,
        quote: 36241.83
    },
    {
        epoch: 1465873484,
        quote: 36241.17
    },
    {
        epoch: 1465873486,
        quote: 36236.73
    },
    {
        epoch: 1465873488,
        quote: 36240.61
    },
    {
        epoch: 1465873490,
        quote: 36240.36
    },
    {
        epoch: 1465873492,
        quote: 36234.34
    },
    {
        epoch: 1465873494,
        quote: 36227.96
    },
    {
        epoch: 1465873496,
        quote: 36225.76
    },
    {
        epoch: 1465873498,
        quote: 36222.46
    },
    {
        epoch: 1465873500,
        quote: 36236.34
    },
    {
        epoch: 1465873502,
        quote: 36236.88
    },
    {
        epoch: 1465873504,
        quote: 36239.09
    },
    {
        epoch: 1465873506,
        quote: 36233.95
    },
    {
        epoch: 1465873508,
        quote: 36226.13
    },
    {
        epoch: 1465873510,
        quote: 36218.34
    },
    {
        epoch: 1465873512,
        quote: 36217.05
    },
    {
        epoch: 1465873514,
        quote: 36228.4
    },
    {
        epoch: 1465873516,
        quote: 36232.05
    },
    {
        epoch: 1465873518,
        quote: 36231.05
    },
    {
        epoch: 1465873520,
        quote: 36231.84
    },
    {
        epoch: 1465873522,
        quote: 36232.69
    },
    {
        epoch: 1465873524,
        quote: 36225.95
    },
    {
        epoch: 1465873526,
        quote: 36220.71
    },
    {
        epoch: 1465873528,
        quote: 36218.02
    },
    {
        epoch: 1465873530,
        quote: 36212.52
    },
    {
        epoch: 1465873532,
        quote: 36213.53
    },
    {
        epoch: 1465873534,
        quote: 36211.74
    },
    {
        epoch: 1465873536,
        quote: 36201.85
    },
    {
        epoch: 1465873538,
        quote: 36217.03
    },
    {
        epoch: 1465873540,
        quote: 36241.22
    },
    {
        epoch: 1465873542,
        quote: 36234.18
    },
    {
        epoch: 1465873544,
        quote: 36231.17
    },
    {
        epoch: 1465873546,
        quote: 36228.26
    },
    {
        epoch: 1465873548,
        quote: 36221.61
    },
    {
        epoch: 1465873550,
        quote: 36229.75
    },
    {
        epoch: 1465873552,
        quote: 36229.27
    },
    {
        epoch: 1465873554,
        quote: 36213.8
    },
    {
        epoch: 1465873556,
        quote: 36218.71
    },
    {
        epoch: 1465873558,
        quote: 36225.54
    },
    {
        epoch: 1465873560,
        quote: 36210.96
    },
    {
        epoch: 1465873562,
        quote: 36196.62
    },
    {
        epoch: 1465873564,
        quote: 36182.83
    },
    {
        epoch: 1465873566,
        quote: 36182.74
    },
    {
        epoch: 1465873568,
        quote: 36176.83
    },
    {
        epoch: 1465873570,
        quote: 36190.54
    },
    {
        epoch: 1465873572,
        quote: 36164.52
    },
    {
        epoch: 1465873574,
        quote: 36166.91
    },
    {
        epoch: 1465873576,
        quote: 36169.96
    },
    {
        epoch: 1465873578,
        quote: 36181.9
    },
    {
        epoch: 1465873580,
        quote: 36181.01
    },
    {
        epoch: 1465873582,
        quote: 36176.1
    },
    {
        epoch: 1465873584,
        quote: 36181.49
    },
    {
        epoch: 1465873586,
        quote: 36187.95
    },
    {
        epoch: 1465873588,
        quote: 36206.14
    },
    {
        epoch: 1465873590,
        quote: 36185.6
    },
    {
        epoch: 1465873592,
        quote: 36190.47
    },
    {
        epoch: 1465873594,
        quote: 36190.35
    },
    {
        epoch: 1465873596,
        quote: 36205.56
    },
    {
        epoch: 1465873598,
        quote: 36199.55
    },
    {
        epoch: 1465873600,
        quote: 36195.02
    },
    {
        epoch: 1465873602,
        quote: 36182.86
    },
    {
        epoch: 1465873604,
        quote: 36187.1
    },
    {
        epoch: 1465873606,
        quote: 36188.68
    },
    {
        epoch: 1465873608,
        quote: 36212.81
    },
    {
        epoch: 1465873610,
        quote: 36217.73
    },
    {
        epoch: 1465873612,
        quote: 36229.01
    },
    {
        epoch: 1465873614,
        quote: 36232.86
    },
    {
        epoch: 1465873616,
        quote: 36242.94
    },
    {
        epoch: 1465873618,
        quote: 36246.97
    },
    {
        epoch: 1465873620,
        quote: 36240.11
    },
    {
        epoch: 1465873622,
        quote: 36236.21
    },
    {
        epoch: 1465873624,
        quote: 36239.91
    },
    {
        epoch: 1465873626,
        quote: 36235.72
    },
    {
        epoch: 1465873628,
        quote: 36254.63
    },
    {
        epoch: 1465873630,
        quote: 36262.87
    },
    {
        epoch: 1465873632,
        quote: 36251.86
    },
    {
        epoch: 1465873634,
        quote: 36258.43
    },
    {
        epoch: 1465873636,
        quote: 36251.81
    },
    {
        epoch: 1465873638,
        quote: 36252.64
    },
    {
        epoch: 1465873640,
        quote: 36257.06
    },
    {
        epoch: 1465873642,
        quote: 36254.61
    },
    {
        epoch: 1465873644,
        quote: 36257.22
    },
    {
        epoch: 1465873646,
        quote: 36262.7
    },
    {
        epoch: 1465873648,
        quote: 36278.39
    },
    {
        epoch: 1465873650,
        quote: 36290.02
    },
    {
        epoch: 1465873652,
        quote: 36271.63
    },
    {
        epoch: 1465873654,
        quote: 36271.03
    },
    {
        epoch: 1465873656,
        quote: 36283.4
    },
    {
        epoch: 1465873658,
        quote: 36290.17
    },
    {
        epoch: 1465873660,
        quote: 36280.32
    },
    {
        epoch: 1465873662,
        quote: 36286.76
    },
    {
        epoch: 1465873664,
        quote: 36290.91
    },
    {
        epoch: 1465873666,
        quote: 36285.9
    },
    {
        epoch: 1465873668,
        quote: 36289.66
    },
    {
        epoch: 1465873670,
        quote: 36282.28
    },
    {
        epoch: 1465873672,
        quote: 36284.71
    },
    {
        epoch: 1465873674,
        quote: 36320.64
    },
    {
        epoch: 1465873676,
        quote: 36314.89
    },
    {
        epoch: 1465873678,
        quote: 36316.73
    },
    {
        epoch: 1465873680,
        quote: 36321.98
    },
    {
        epoch: 1465873682,
        quote: 36330.18
    },
    {
        epoch: 1465873684,
        quote: 36312.33
    },
    {
        epoch: 1465873686,
        quote: 36313.29
    },
    {
        epoch: 1465873688,
        quote: 36313.08
    },
    {
        epoch: 1465873690,
        quote: 36314.72
    },
    {
        epoch: 1465873692,
        quote: 36324.06
    },
    {
        epoch: 1465873694,
        quote: 36321.36
    },
    {
        epoch: 1465873696,
        quote: 36318.35
    },
    {
        epoch: 1465873698,
        quote: 36329.27
    },
    {
        epoch: 1465873700,
        quote: 36314.29
    },
    {
        epoch: 1465873702,
        quote: 36321.32
    },
    {
        epoch: 1465873704,
        quote: 36305.53
    },
    {
        epoch: 1465873706,
        quote: 36306.36
    },
    {
        epoch: 1465873708,
        quote: 36314.9
    },
    {
        epoch: 1465873710,
        quote: 36308.27
    },
    {
        epoch: 1465873712,
        quote: 36307.13
    },
    {
        epoch: 1465873714,
        quote: 36312.38
    },
    {
        epoch: 1465873716,
        quote: 36303.93
    },
    {
        epoch: 1465873718,
        quote: 36321.41
    },
    {
        epoch: 1465873720,
        quote: 36312.41
    },
    {
        epoch: 1465873722,
        quote: 36317.51
    },
    {
        epoch: 1465873724,
        quote: 36303.67
    },
    {
        epoch: 1465873726,
        quote: 36288.71
    },
    {
        epoch: 1465873728,
        quote: 36287.32
    },
    {
        epoch: 1465873730,
        quote: 36290.39
    },
    {
        epoch: 1465873732,
        quote: 36294.45
    },
    {
        epoch: 1465873734,
        quote: 36296.45
    },
    {
        epoch: 1465873736,
        quote: 36291.8
    },
    {
        epoch: 1465873738,
        quote: 36283.95
    },
    {
        epoch: 1465873740,
        quote: 36281.04
    },
    {
        epoch: 1465873742,
        quote: 36278.45
    },
    {
        epoch: 1465873744,
        quote: 36283.73
    },
    {
        epoch: 1465873746,
        quote: 36277.62
    },
    {
        epoch: 1465873748,
        quote: 36276.07
    },
    {
        epoch: 1465873750,
        quote: 36282.02
    },
    {
        epoch: 1465873752,
        quote: 36285.06
    },
    {
        epoch: 1465873754,
        quote: 36276.07
    },
    {
        epoch: 1465873756,
        quote: 36270.11
    },
    {
        epoch: 1465873758,
        quote: 36283.26
    },
    {
        epoch: 1465873760,
        quote: 36293.71
    },
    {
        epoch: 1465873762,
        quote: 36300.41
    },
    {
        epoch: 1465873764,
        quote: 36310.62
    },
    {
        epoch: 1465873766,
        quote: 36316.71
    },
    {
        epoch: 1465873768,
        quote: 36306.78
    },
    {
        epoch: 1465873770,
        quote: 36327.55
    },
    {
        epoch: 1465873772,
        quote: 36335.41
    },
    {
        epoch: 1465873774,
        quote: 36320.56
    },
    {
        epoch: 1465873776,
        quote: 36325.04
    },
    {
        epoch: 1465873778,
        quote: 36324.04
    },
    {
        epoch: 1465873780,
        quote: 36322.08
    },
    {
        epoch: 1465873782,
        quote: 36318.59
    },
    {
        epoch: 1465873784,
        quote: 36333.45
    },
    {
        epoch: 1465873786,
        quote: 36336.11
    },
    {
        epoch: 1465873788,
        quote: 36331.84
    },
    {
        epoch: 1465873790,
        quote: 36345.63
    },
    {
        epoch: 1465873792,
        quote: 36332.22
    },
    {
        epoch: 1465873794,
        quote: 36327.7
    },
    {
        epoch: 1465873796,
        quote: 36330.61
    },
    {
        epoch: 1465873798,
        quote: 36332.02
    },
    {
        epoch: 1465873800,
        quote: 36335.06
    },
    {
        epoch: 1465873802,
        quote: 36354.63
    },
    {
        epoch: 1465873804,
        quote: 36344.95
    },
    {
        epoch: 1465873806,
        quote: 36346.14
    },
    {
        epoch: 1465873808,
        quote: 36341.73
    },
    {
        epoch: 1465873810,
        quote: 36346.45
    },
    {
        epoch: 1465873812,
        quote: 36338.02
    },
    {
        epoch: 1465873814,
        quote: 36350.46
    },
    {
        epoch: 1465873816,
        quote: 36362.11
    },
    {
        epoch: 1465873818,
        quote: 36357.76
    },
    {
        epoch: 1465873820,
        quote: 36363.89
    },
    {
        epoch: 1465873822,
        quote: 36362.53
    },
    {
        epoch: 1465873824,
        quote: 36365.59
    },
    {
        epoch: 1465873826,
        quote: 36353.13
    },
    {
        epoch: 1465873828,
        quote: 36347.09
    },
    {
        epoch: 1465873830,
        quote: 36352.7
    },
    {
        epoch: 1465873832,
        quote: 36342.15
    },
    {
        epoch: 1465873834,
        quote: 36358.03
    },
    {
        epoch: 1465873836,
        quote: 36375.3
    },
    {
        epoch: 1465873838,
        quote: 36366.97
    },
    {
        epoch: 1465873840,
        quote: 36370.09
    },
    {
        epoch: 1465873842,
        quote: 36368.22
    },
    {
        epoch: 1465873844,
        quote: 36374.44
    },
    {
        epoch: 1465873846,
        quote: 36372.3
    },
    {
        epoch: 1465873848,
        quote: 36371.54
    },
    {
        epoch: 1465873850,
        quote: 36382.41
    },
    {
        epoch: 1465873852,
        quote: 36371.88
    },
    {
        epoch: 1465873854,
        quote: 36384.01
    },
    {
        epoch: 1465873856,
        quote: 36385.12
    },
    {
        epoch: 1465873858,
        quote: 36373.22
    },
    {
        epoch: 1465873860,
        quote: 36359.19
    },
    {
        epoch: 1465873862,
        quote: 36357.16
    },
    {
        epoch: 1465873864,
        quote: 36342.86
    },
    {
        epoch: 1465873866,
        quote: 36352.9
    },
    {
        epoch: 1465873868,
        quote: 36356.95
    },
    {
        epoch: 1465873870,
        quote: 36347.96
    },
    {
        epoch: 1465873872,
        quote: 36352.88
    },
    {
        epoch: 1465873874,
        quote: 36343.45
    },
    {
        epoch: 1465873876,
        quote: 36338.06
    },
    {
        epoch: 1465873878,
        quote: 36326.25
    },
    {
        epoch: 1465873880,
        quote: 36328.02
    },
    {
        epoch: 1465873882,
        quote: 36349.97
    },
    {
        epoch: 1465873884,
        quote: 36348.07
    },
    {
        epoch: 1465873886,
        quote: 36343.6
    },
    {
        epoch: 1465873888,
        quote: 36340.33
    }
];
