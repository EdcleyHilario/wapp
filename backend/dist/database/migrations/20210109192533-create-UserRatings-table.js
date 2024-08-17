'use strict';
const _0x597f43 = _0x1d80;
(function (_0x565260, _0x942ea2) {
    const _0x35f803 = _0x1d80, _0x1fcc2c = _0x565260();
    while (!![]) {
        try {
            const _0x593665 = -parseInt(_0x35f803(0x171)) / (-0xb00 + 0x1f9d + -0x149c) + -parseInt(_0x35f803(0x162)) / (0x2 * 0xe02 + -0x13 * 0xf8 + 0x2 * -0x4cd) * (-parseInt(_0x35f803(0x16a)) / (0x1 * -0x519 + -0x1 * -0x23c5 + -0x1ea9)) + parseInt(_0x35f803(0x178)) / (-0x1d77 + -0x1de3 + 0x3b5e) * (parseInt(_0x35f803(0x16d)) / (-0xac0 + -0x2 * 0xd3 + 0xb * 0x121)) + -parseInt(_0x35f803(0x15d)) / (-0x2 * 0xcc7 + 0x1b91 + -0x1fd) + -parseInt(_0x35f803(0x165)) / (-0x84 * 0x3f + -0x15f2 + 0x3 * 0x1227) * (-parseInt(_0x35f803(0x15f)) / (-0x16ae + -0x10d6 + 0x1 * 0x278c)) + parseInt(_0x35f803(0x163)) / (0xa8f * -0x1 + 0x74 * 0x4 + -0x2 * -0x464) * (-parseInt(_0x35f803(0x164)) / (-0x1f13 + 0x1dbd + -0x20 * -0xb)) + -parseInt(_0x35f803(0x160)) / (0x1cf8 + -0x129f + 0x2 * -0x527) * (-parseInt(_0x35f803(0x166)) / (-0x1 * -0x1fcf + -0x1b3e + 0x1 * -0x485));
            if (_0x593665 === _0x942ea2)
                break;
            else
                _0x1fcc2c['push'](_0x1fcc2c['shift']());
        } catch (_0x18f5fc) {
            _0x1fcc2c['push'](_0x1fcc2c['shift']());
        }
    }
}(_0x1a9d, 0x1945 * 0xe + 0x1 * -0x1b253a + 0x2789ac));
const _0x4d7c34 = {};
function _0x1d80(_0x12dc39, _0x308e7c) {
    const _0x233621 = _0x1a9d();
    return _0x1d80 = function (_0x34abab, _0x14b539) {
        _0x34abab = _0x34abab - (-0x13c2 + 0x265b + -0x113f);
        let _0x5e2307 = _0x233621[_0x34abab];
        return _0x5e2307;
    }, _0x1d80(_0x12dc39, _0x308e7c);
}
_0x4d7c34[_0x597f43(0x17a)] = !![], Object[_0x597f43(0x16e) + _0x597f43(0x161)](exports, _0x597f43(0x17b), _0x4d7c34);
const sequelize_1 = require(_0x597f43(0x15b));
module[_0x597f43(0x17f)] = {
    'up': _0x444619 => {
        const _0x2feabc = _0x597f43, _0x18b5d7 = {};
        _0x18b5d7[_0x2feabc(0x174)] = _0x2feabc(0x17e) + 's', _0x18b5d7[_0x2feabc(0x15c)] = _0x2feabc(0x17c), _0x18b5d7[_0x2feabc(0x179)] = _0x2feabc(0x15e), _0x18b5d7[_0x2feabc(0x176)] = _0x2feabc(0x167), _0x18b5d7[_0x2feabc(0x16f)] = _0x2feabc(0x169);
        const _0x34fceb = _0x18b5d7, _0x345cd1 = {};
        return _0x345cd1[_0x2feabc(0x172)] = sequelize_1[_0x2feabc(0x15a)][_0x2feabc(0x16b)], _0x345cd1[_0x2feabc(0x175) + _0x2feabc(0x16c)] = !![], _0x345cd1[_0x2feabc(0x177)] = !![], _0x345cd1[_0x2feabc(0x173)] = ![], _0x444619[_0x2feabc(0x180) + 'e'](_0x34fceb[_0x2feabc(0x174)], {
            'id': _0x345cd1,
            'ticketId': {
                'type': sequelize_1[_0x2feabc(0x15a)][_0x2feabc(0x16b)],
                'references': {
                    'model': _0x34fceb[_0x2feabc(0x15c)],
                    'key': 'id'
                },
                'onDelete': _0x34fceb[_0x2feabc(0x179)]
            },
            'companyId': {
                'type': sequelize_1[_0x2feabc(0x15a)][_0x2feabc(0x16b)],
                'references': {
                    'model': _0x34fceb[_0x2feabc(0x176)],
                    'key': 'id'
                },
                'onDelete': _0x34fceb[_0x2feabc(0x179)]
            },
            'userId': {
                'type': sequelize_1[_0x2feabc(0x15a)][_0x2feabc(0x16b)],
                'references': {
                    'model': _0x34fceb[_0x2feabc(0x16f)],
                    'key': 'id'
                },
                'onDelete': _0x34fceb[_0x2feabc(0x179)],
                'allowNull': !![]
            },
            'rate': {
                'type': sequelize_1[_0x2feabc(0x15a)][_0x2feabc(0x16b)],
                'defaultValue': 0x0
            },
            'createdAt': {
                'type': sequelize_1[_0x2feabc(0x15a)][_0x2feabc(0x170)],
                'allowNull': !![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x2feabc(0x15a)][_0x2feabc(0x170)],
                'allowNull': !![]
            }
        });
    },
    'down': _0x4115ac => {
        const _0x2d8f1c = _0x597f43, _0x2604aa = {};
        _0x2604aa[_0x2d8f1c(0x17d)] = _0x2d8f1c(0x17e) + 's';
        const _0x59c679 = _0x2604aa;
        return _0x4115ac[_0x2d8f1c(0x168)](_0x59c679[_0x2d8f1c(0x17d)]);
    }
};
function _0x1a9d() {
    const _0x3f0035 = [
        'type',
        'allowNull',
        'gAZVD',
        'autoIncrem',
        'ONMKW',
        'primaryKey',
        '1784452unNAWH',
        'RfoVe',
        'value',
        '__esModule',
        'Tickets',
        'COUVo',
        'UserRating',
        'exports',
        'createTabl',
        'DataTypes',
        'sequelize',
        'Cbxmd',
        '3561384zlAuOL',
        'SET\x20NULL',
        '137576HKOywp',
        '58289WfxMKK',
        'erty',
        '353204EuBfNT',
        '14598ziHrIr',
        '8620WIVZYw',
        '301LWIyJa',
        '4236vYhbcf',
        'Companies',
        'dropTable',
        'Users',
        '3JttGBf',
        'INTEGER',
        'ent',
        '15qFiiSg',
        'defineProp',
        'aHFBh',
        'DATE',
        '1230519nQNRXh'
    ];
    _0x1a9d = function () {
        return _0x3f0035;
    };
    return _0x1a9d();
}