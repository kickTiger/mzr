// Copyright 2013 Unknown
//
// Licensed under the Apache License, Version 2.0 (the "License"): you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

package gopha

// CompareDiff returns differences number of fingerprint.
func CompareDiff(fg1, fg2 string) int {
	diff := 0
	fbyte := []byte(fg1)
	fbyte2 := []byte(fg2)
	for i, v := range fbyte {
		if fbyte2[i] != v {
			diff++
		}
	}
	return diff
}
