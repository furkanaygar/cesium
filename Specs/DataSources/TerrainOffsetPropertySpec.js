define([
        'Core/Cartesian3',
        'Core/JulianDate',
        'DataSources/CallbackProperty',
        'DataSources/ConstantProperty',
        'DataSources/TerrainOffsetProperty',
        'Specs/createGlobe',
        'Specs/createScene'
    ], function(
        Cartesian3,
        JulianDate,
        CallbackProperty,
        ConstantProperty,
        TerrainOffsetProperty,
        createGlobe,
        createScene) {
        'use strict';

describe('DataSources/TerrainOffsetProperty', function() {

    var scene;
    var time = JulianDate.now();
    beforeAll(function() {
        scene = createScene();
        scene.globe = createGlobe();
    });

    afterAll(function() {
        scene.destroyForSpecs();
    });

    it('can construct and destroy', function() {
        var position = new CallbackProperty(jasmine.createSpy(), false);
        var height = new ConstantProperty(30);
        var extrudedHeight = new ConstantProperty(0);
        var property = new TerrainOffsetProperty(scene, position, height, extrudedHeight);
        expect(property.isConstant).toBe(false);
        expect(property.getValue(time)).toEqual(Cartesian3.ZERO);
        property.destroy();
        expect(property.isDestroyed()).toBe(true);
    });

    it('throws without scene', function() {
        var position = new CallbackProperty(jasmine.createSpy(), false);
        var height = new ConstantProperty(30);
        var extrudedHeight = new ConstantProperty(0);
        expect(function() {
            return new TerrainOffsetProperty(undefined, position, height, extrudedHeight);
        }).toThrowDeveloperError();
    });

    it('throws without position', function() {
        var height = new ConstantProperty(30);
        var extrudedHeight = new ConstantProperty(0);
        expect(function() {
            return new TerrainOffsetProperty(scene, undefined, height, extrudedHeight);
        }).toThrowDeveloperError();
    });
});
});
