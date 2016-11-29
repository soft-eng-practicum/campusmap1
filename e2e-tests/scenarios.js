'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {
    
  beforeEach(function() {
      browser.get('index.html');
  });


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  it('test the how to page click functionality', function() {
    browser.ignoreSynchronization = true;
    element(by.id('howToPage')).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8000/etc/howto.html");
  });

  it('test the authors page click functionality', function() {
    browser.ignoreSynchronization = true;
    element(by.id('authorsPage')).click();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8000/etc/authors.html");
  });

  it('test the OneDrive page href value', function() {
    expect(element(by.id('oneDriveButton')).getAttribute('href')).toEqual('https://1drv.ms/x/s!AoEEhTIClKTDlwqlS2AaD-7Fplgf');
  });

});
