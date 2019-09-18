define([
        'Core/PlaneOutlineGeometry',
        'Specs/createPackableSpecs'
    ], function(
        PlaneOutlineGeometry,
        createPackableSpecs) {
        'use strict';

describe('Core/PlaneOutlineGeometry', function() {

    it('constructor creates positions', function() {
        var m = PlaneOutlineGeometry.createGeometry(new PlaneOutlineGeometry());

        expect(m.attributes.position.values.length).toEqual(4 * 3);
        expect(m.indices.length).toEqual(4 * 2);
    });

    createPackableSpecs(PlaneOutlineGeometry, new PlaneOutlineGeometry(), []);
});
});
