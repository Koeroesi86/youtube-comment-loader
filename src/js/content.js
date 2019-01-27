/**
 * Created by Chris on 18/01/2019.
 */

const viewRepliesButtonSelector = 'span.ytd-comment-replies-renderer';
const moreRepliesButtonSelector = 'paper-button.yt-next-continuation';
const expanderSelector = '#expander';
const commentBlockSelector = 'ytd-comment-renderer.ytd-comment-replies-renderer';
const commentListSelector = 'ytd-comment-replies-renderer.ytd-comment-thread-renderer';

const clickMoreReplies = target => {
  let prevCount = 0;
  const currentCommentList = target.closest(commentListSelector);
  const updater = () => {
    const commentBlocks = currentCommentList.querySelectorAll(commentBlockSelector);
    const currentCount = commentBlocks.length;
    if (prevCount !== currentCount) {
      prevCount = currentCount;
      const lastReply = commentBlocks[commentBlocks.length - 1];

      if (lastReply) lastReply.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'nearest'
      });
    }

    const button = target.closest(expanderSelector).querySelector(moreRepliesButtonSelector);

    if (button) {
      button.click();
    }
  };
  currentCommentList.addEventListener('DOMSubtreeModified', updater, false);
};

const listener = (e) => {
  const { target } = e;
  if (target.matches(viewRepliesButtonSelector)) {
    clickMoreReplies(target);
  }
};

document.body.addEventListener("click", listener);
