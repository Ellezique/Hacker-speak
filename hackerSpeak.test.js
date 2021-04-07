const {hackerSpeak} = require('./hackerSpeak');

describe('hackerSpeak', () => {
	


	
	it('converts a string with lowercase vowels', () => {
		expect(hackerSpeak("ha ha ha")).toBe("h0 h0 h0");
	});
	
	it('converts a string with uppercase vowels', () => {
		expect(hackerSpeak("EMP")).toBe("1MP");
	});
	
	it('maintains case of non vowel characters', () => {
		expect(hackerSpeak("TEST test")).toBe("T1ST t1st");
	});
	
	it('converts a string with mixed vowels', () => {
		expect(hackerSpeak("Are you ready?")).toBe("0r1 y34 r10dy?");
	});
	
	it('passes the examples', () => {
		expect(hackerSpeak("Ha ha ha")).toBe("H0 h0 h0");
        expect(hackerSpeak("How about this string?")).toBe("H3w 0b34t th2s str2ng?");
        expect(hackerSpeak("A bit of a challenge!")).toBe("0 b2t 3f 0 ch0ll1ng1!");
	});
	
	it('returns an empty string when passed an empty string', () => {
		expect(hackerSpeak("")).toBe("");
	});
	
	it('does not alter a string with no vowels', () => {
		expect(hackerSpeak("cdf g h")).toBe("cdf g h"); 
	}); 
	
	it('maintains whitespace', () => {
		expect(hackerSpeak("   a")).toBe("   0");
	}); 
});
