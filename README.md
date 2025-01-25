# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the MongoDB `$inc` operator. The error occurs when attempting to decrement a counter field using a negative value directly in the update query. This can lead to unexpected results if the initial counter value is 0 or less.

## Problem
The provided code snippet attempts to decrement the `counter` field by one.  However, if the `counter` field does not exist or has a value less than 1, the `$inc` operator may not produce the desired behavior. In such cases, it can result in data corruption or unexpected side effects.

## Solution
The solution is to use the `$inc` operator in a more robust way.  This involves either conditionally incrementing/decrementing or defaulting to a minimum value.
