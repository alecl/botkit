let botkit;

jest.mock('../../lib/CoreBot', () => 'corebot');
jest.mock('../../lib/SlackBot', () => 'slackbot');
jest.mock('../../lib/Facebook', () => 'facebook');
jest.mock('../../lib/TwilioIPMBot', () => 'twilio');
jest.mock('../../lib/BotFramework', () => 'botframework');
jest.mock('../../lib/CiscoSparkbot', () => 'spark');
jest.mock('../../lib/ConsoleBot', () => 'console');

beforeEach(() => {
    jest.clearAllMocks();
    botkit = require('../../lib/Botkit');
});

test('exports bot interfaces', () => {
    expect(botkit.core).toBe('corebot');
    expect(botkit.slackbot).toBe('slackbot');
    expect(botkit.facebookbot).toBe('facebook');
    expect(botkit.twilioipmbot).toBe('twilio');
    expect(botkit.botframeworkbot).toBe('botframework');
    expect(botkit.sparkbot).toBe('spark');
    expect(botkit.consolebot).toBe('console');
});
