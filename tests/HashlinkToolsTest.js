/**
 * HashlinkToolsTest.js
 * @fileOverview Tests HashlinkTools library
 * @author Mark Christian D. Lopez [mark@ypdigital.com.au]
 */

QUnit.test( "copyHashlink test", function( assert ) {
    // Copy to no hashlink
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to no hashlink');

    // Copy to no hashlink, no slash
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to no hashlink, no slash');

    // Copy to with hashlink
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to with hashlink');

    // Copy to with hashlink, no slash
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui#guests=NaN&hotelType=&starRating=3,3.5,4,4.5';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to with hashlink, with slash');

    ///////////////////////////////////////

    // Copy to no hashlink
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to no hashlink');

    // Copy to no hashlink, no slash
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to no hashlink, no slash');

    // Copy to with hashlink
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to with hashlink');

    // Copy to with hashlink, no slash
    src = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';
    dest = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui#guests=NaN&hotelType=&starRating=3,3.5,4,4.5';
    expected = 'http://dev.weddingdestinations.com.au/wedding-destinations/thailand/koh-samui/#guests=NaN&hotelType=&starRating=3,3.5,4,4.5,5';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy to with hashlink, with slash');

    // Copy blank hashlink to blank hashlink
    src = 'http://wd-ss.ypdigital.com.au/wedding-destinations/thailand/';
    dest = 'http://wd-ss.ypdigital.com.au/wedding-destinations/thailand/koh-samui/';
    expected = 'http://wd-ss.ypdigital.com.au/wedding-destinations/thailand/koh-samui/';

    dest = HashlinkTools.copyHashlink(src, dest);
    assert.equal(dest, expected, 'Copy no hashlink');
});